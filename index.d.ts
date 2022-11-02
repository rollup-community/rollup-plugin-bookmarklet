import type { Plugin } from 'rollup'

/**
 * Rollup plugin for bookmarklet.
 * It adds `javascript:` prefix to code.
 *
 * @returns plugin
 * @see https://en.wikipedia.org/wiki/Bookmarklet
 */
export default function bookmarklet (): Plugin
