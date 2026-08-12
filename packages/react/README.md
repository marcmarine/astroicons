# @astroicons/react

React components for the [Astroicons](https://github.com/marcmarine/astroicons) SVG set.

## Installation

```bash
npm install @astroicons/react
```

## Usage

Import each icon individually as a component:

```tsx
import { Neptune, Conjunction, Saturn } from '@astroicons/react';

function App() {
  return (
    <>
      <Neptune  />
      <Conjunction size={16} />
      <Saturn />
    </>
  );
}
```

Render an icon dynamically by name:

```tsx
import { Icon, type IconName } from '@astroicons/react/icon'

export function Symbol({ name }: { name: IconName }) {
  return <Icon name="venus" />
}
```

> ⚠️ `Icon` imports the full icon registry. Use it only when you need to resolve an icon at runtime; otherwise prefer individual imports.

## Props

All icon components accept:

| Prop          | Type                           | Default          |
| ------------- | ------------------------------ | ---------------- |
| `size`        | `string \| number`             | `24`             |
| `color`       | `string`                       | `'currentColor'` |
| `strokeWidth` | `string \| number`             | `1`              |
| `className`   | `string`                       | —                |
| `...rest`     | `SVGAttributes<SVGSVGElement>` | —                |

## License

MIT License
