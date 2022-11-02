# rollup-plugin-bookmarklet

Rollup plugin for bookmarklet.
It adds `javascript:` prefix to code on renderChunk hook.

## Usage

### Install package

Install `rollup-plugin-bookmarklet`.

```sh
npm i -D rollup-plugin-bookmarklet
```

### Use in Rollup config

Use `rollup-plugin-bookmarklet` in Rollup config.

#### JavaScript

`rollup.config.js`:

```ts
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

#### TypeScript

`rollup.config.ts`:

```ts
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
