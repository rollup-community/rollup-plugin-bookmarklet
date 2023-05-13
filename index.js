// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef { import("rollup").Plugin } Plugin */

/**
 * Rollup plugin for bookmarklet.
 * It adds `javascript:` prefix to code.
 * @returns {Plugin} plugin
 * @see https://en.wikipedia.org/wiki/Bookmarklet
 */
// eslint-disable-next-line unicorn/prefer-module
module.exports = function bookmarklet () {
  return {
    name: 'bookmarklet',
    renderChunk: (code) => {
      return {
        code: `javascript:${code}`
      }
    }
  }
}
