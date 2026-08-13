<p align="center">
  <picture >
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/marcmarine/astroicons/raw/main/docs/public/astroicons.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/marcmarine/astroicons/raw/main/docs/public/astroicons.svg">
    <img alt="The Sun and the Moon in Conjunction" src="https://github.com/marcmarine/astroicons/raw/main/docs/public/astroicons.svg" width="180px" >
  </picture>
</p>

<h1 align="center">Astroicons</h1>

<h3 align="center">Astronomical symbols for the modern web</h3>

<span align="center">

[![Deploy to Pages](https://github.com/marcmarine/astroicons/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/marcmarine/astroicons/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</span>

<span align="center">

[Getting Started](#usage) · [Icons](https://astroicons.com) · [Feedback](#feedback)

</span>

A collection of SVG icons for planets, zodiac signs and astrological aspects.

## Installation

```bash
npm install @astroicons/react
```

## Usage

### React

Import icons individually as components:

```tsx
import { Sun, Conjunction, Moon } from '@astroicons/react'

export function Chart() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Sun />
      <Conjunction size={16} />
      <Moon />
    </div>
  )
}
```

Or render an icon dynamically by name:

```tsx
import { Icon, type IconName } from '@astroicons/react/icon'

export function Symbol({ name }: { name: IconName }) {
  return <Icon name="venus" />
}
```

> ℹ️ `Icon` loads the full icon registry. Prefer individual imports except when resolving icons at runtime.

## Icons

All icons are 24×24, use `currentColor`, and a `1px` stroke.

<p align="center">
  <img src="icons/sun.svg" width="48" /> <img src="icons/venus.svg" width="48" /> 
  <img src="icons/aries.svg" width="48" /> <img src="icons/conjunction.svg" width="48" />
</p>

[Browse all icons →](https://astroicons.com)

_20+ astronomical symbols — planets, signs, and aspects_

## Props

React icon components accept the following props:

| Prop          | Type                           | Default          |
| ------------- | ------------------------------ | ---------------- |
| `size`        | `string \| number`             | `24`             |
| `color`       | `string`                       | `'currentColor'` |
| `strokeWidth` | `string \| number`             | `1`              |
| `className`   | `string`                       | —                |
| `...rest`     | `SVGAttributes<SVGSVGElement>` | —                |

## Resources

- [Figma file](https://www.figma.com/community/file/1657106925519986163/astroicons)
- [Symbol reference](https://github.com/marcmarine/western-signs#symbols)

## Feedback

Feel free to provide [any comments](https://github.com/marcmarine/astroicons/issues/new). All kinds of contributions are welcome 🎉.
