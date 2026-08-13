# @astroicons/react

[![NPM Version](https://img.shields.io/npm/v/@astroicons/react)](https://www.npmjs.com/package/@astroicons/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![View Changelog](https://img.shields.io/badge/view-CHANGELOG.md-yellow.svg)](https://github.com/marcmarine/astroicons/blob/main/packages/react/CHANGELOG.md)

React components for the [Astroicons](https://github.com/marcmarine/astroicons) SVG set.

## Installation

```bash
npm install @astroicons/react
```

## Usage

Import each icon individually as a component:

```tsx
import { Sun, Conjunction, Moon } from '@astroicons/react';

function App() {
  return (
    <>
      <Sun />
      <Conjunction size={16} />
      <Moon />
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

See [LICENSE](LICENSE)
