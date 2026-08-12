# Astroicons

An open-source SVG icon set featuring planets, zodiac signs, and astrological aspects. Free under the MIT license.

## Installation

```bash
npm install @astroicons/react
```

## Usage

### React

Import icons individually as components:

```tsx
import { Neptune, Conjunction, Saturn } from '@astroicons/react'

export function Chart() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Neptune />
      <Conjunction size={16} />
      <Saturn />
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

### Planets

<table>
  <tr>
    <td align="center"><img src="icons/sun.svg" width="32" height="32" alt="sun"><br><sub>sun</sub></td>
    <td align="center"><img src="icons/moon.svg" width="32" height="32" alt="moon"><br><sub>moon</sub></td>
    <td align="center"><img src="icons/mercury.svg" width="32" height="32" alt="mercury"><br><sub>mercury</sub></td>
    <td align="center"><img src="icons/venus.svg" width="32" height="32" alt="venus"><br><sub>venus</sub></td>
    <td align="center"><img src="icons/mars.svg" width="32" height="32" alt="mars"><br><sub>mars</sub></td>
    <td align="center"><img src="icons/jupiter.svg" width="32" height="32" alt="jupiter"><br><sub>jupiter</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="icons/saturn.svg" width="32" height="32" alt="saturn"><br><sub>saturn</sub></td>
    <td align="center"><img src="icons/uranus.svg" width="32" height="32" alt="uranus"><br><sub>uranus</sub></td>
    <td align="center"><img src="icons/neptune.svg" width="32" height="32" alt="neptune"><br><sub>neptune</sub></td>
    <td align="center"><img src="icons/pluto.svg" width="32" height="32" alt="pluto"><br><sub>pluto</sub></td>
    <td></td><td></td>
  </tr>
</table>

### Signs

<table>
  <tr>
    <td align="center"><img src="icons/aries.svg" width="32" height="32" alt="aries"><br><sub>aries</sub></td>
    <td align="center"><img src="icons/taurus.svg" width="32" height="32" alt="taurus"><br><sub>taurus</sub></td>
    <td align="center"><img src="icons/gemini.svg" width="32" height="32" alt="gemini"><br><sub>gemini</sub></td>
    <td align="center"><img src="icons/cancer.svg" width="32" height="32" alt="cancer"><br><sub>cancer</sub></td>
    <td align="center"><img src="icons/leo.svg" width="32" height="32" alt="leo"><br><sub>leo</sub></td>
    <td align="center"><img src="icons/virgo.svg" width="32" height="32" alt="virgo"><br><sub>virgo</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="icons/libra.svg" width="32" height="32" alt="libra"><br><sub>libra</sub></td>
    <td align="center"><img src="icons/scorpio.svg" width="32" height="32" alt="scorpio"><br><sub>scorpio</sub></td>
    <td align="center"><img src="icons/sagittarius.svg" width="32" height="32" alt="sagittarius"><br><sub>sagittarius</sub></td>
    <td align="center"><img src="icons/capricorn.svg" width="32" height="32" alt="capricorn"><br><sub>capricorn</sub></td>
    <td align="center"><img src="icons/aquarius.svg" width="32" height="32" alt="aquarius"><br><sub>aquarius</sub></td>
    <td align="center"><img src="icons/pisces.svg" width="32" height="32" alt="pisces"><br><sub>pisces</sub></td>
  </tr>
</table>

### Aspects

<table>
  <tr>
    <td align="center"><img src="icons/conjunction.svg" width="32" height="32" alt="conjunction"><br><sub>conjunction</sub></td>
    <td align="center"><img src="icons/semisextile.svg" width="32" height="32" alt="semisextile"><br><sub>semisextile</sub></td>
    <td align="center"><img src="icons/sextile.svg" width="32" height="32" alt="sextile"><br><sub>sextile</sub></td>
    <td align="center"><img src="icons/quadrature.svg" width="32" height="32" alt="quadrature"><br><sub>quadrature</sub></td>
    <td align="center"><img src="icons/trigone.svg" width="32" height="32" alt="trigone"><br><sub>trigone</sub></td>
    <td align="center"><img src="icons/quincunx.svg" width="32" height="32" alt="quincunx"><br><sub>quincunx</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="icons/opposition.svg" width="32" height="32" alt="opposition"><br><sub>opposition</sub></td>
    <td></td><td></td><td></td><td></td><td></td>
  </tr>
</table>

### Other

<table>
  <tr>
    <td align="center"><img src="icons/ascendant.svg" width="32" height="32" alt="ascendant"><br><sub>ascendant</sub></td>
    <td></td><td></td><td></td><td></td><td></td>
  </tr>
</table>

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

## License

MIT License
