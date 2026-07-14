async function svgToPngBlob(svg: string, scale = 2): Promise<Blob> {
	const svgBlob = new Blob([svg], {
		type: "image/svg+xml;charset=utf-8",
	});

	const url = URL.createObjectURL(svgBlob);

	const img = new Image();

	await new Promise<void>((resolve, reject) => {
		img.onload = () => resolve();
		img.onerror = reject;
		img.src = url;
	});

	const canvas = document.createElement("canvas");
	canvas.width = img.width * scale;
	canvas.height = img.height * scale;

	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Canvas no soportado");

	ctx.scale(scale, scale);
	ctx.drawImage(img, 0, 0);

	const blob = await new Promise<Blob>((resolve, reject) => {
		canvas.toBlob(
			(blob) =>
				blob ? resolve(blob) : reject(new Error("No se pudo generar el PNG")),
			"image/png",
		);
	});

	return blob;
}

export async function downloadPng(svg: string, filename: string) {
	const blob = await svgToPngBlob(svg);

	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();

	URL.revokeObjectURL(url);
}

export async function copyPngToClipboard(svg: string) {
	const blob = await svgToPngBlob(svg);

	await navigator.clipboard.write([
		new ClipboardItem({
			"image/png": blob,
		}),
	]);
}
