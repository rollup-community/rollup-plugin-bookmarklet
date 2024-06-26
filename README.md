[![npm version](https://badge.fury.io/js/rollup-plugin-bookmarklet.svg)](https://badge.fury.io/js/rollup-plugin-bookmarklet)
[![lint](https://github.com/rollup-community/rollup-plugin-bookmarklet/actions/workflows/lint.yml/badge.svg)](https://github.com/rollup-community/rollup-plugin-bookmarklet/actions/workflows/lint.yml)

# rollup-plugin-bookmarklet

Rollup plugin for bookmarklet.
It adds `javascript:` prefix to code.

## Requirements

- Node.js v18 or later
- Rollup v2/v3/v4

## Installation

npm:

```sh
npm i -D rollup-plugin-bookmarklet
```

Yarn:

```sh
yarn add -D rollup-plugin-bookmarklet
```

pnpm:

```sh
pnpm add -D rollup-plugin-bookmarklet
```

## Usage

Use `rollup-plugin-bookmarklet` in Rollup config.

JavaScript:

```javascript
import terser from '@rollup/plugin-terser'
import bookmarklet from 'rollup-plugin-bookmarklet'

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    terser(),
    bookmarklet()
  ]
}
```

TypeScript:

```typescript
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import type { RollupOptions } from 'rollup'
import bookmarklet from 'rollup-plugin-bookmarklet'

const config: RollupOptions = {
  input: 'src/main.ts',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    typescript(),
    terser(),
    bookmarklet()
  ]
}

export default config
```
