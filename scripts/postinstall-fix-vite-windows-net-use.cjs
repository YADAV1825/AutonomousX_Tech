/* eslint-disable no-console */
/* eslint-disable no-undef */
const fs = require('node:fs')
const path = require('node:path')

const target = path.join(
  process.cwd(),
  'node_modules',
  'vite',
  'dist',
  'node',
  'chunks',
  'node.js',
)

function patchFile() {
  if (!fs.existsSync(target)) {
    console.log('[postinstall] vite chunk not found, skipping:', target)
    return
  }

  const original = fs.readFileSync(target, 'utf8')
  if (original.includes('/* AX_PATCH_NET_USE_GUARD */')) {
    console.log('[postinstall] vite already patched')
    return
  }

  const fnStartNeedle = 'function optimizeSafeRealPathSync() {'
  const fnEndNeedle = '\nfunction ensureWatchedFile('
  const fnStart = original.indexOf(fnStartNeedle)
  if (fnStart === -1) {
    console.log('[postinstall] could not find optimizeSafeRealPathSync(), skipping')
    return
  }
  const fnEnd = original.indexOf(fnEndNeedle, fnStart)
  if (fnEnd === -1) {
    console.log('[postinstall] could not find optimizeSafeRealPathSync() end, skipping')
    return
  }

  const before = original.slice(0, fnStart)
  const fnBody = original.slice(fnStart, fnEnd)
  const after = original.slice(fnEnd)

  const needle = 'exec("net use", (error, stdout) => {'
  const execIdx = fnBody.indexOf(needle)
  if (execIdx === -1) {
    console.log('[postinstall] could not find net use exec call in function, skipping')
    return
  }

  const callCloseNeedle = '\n\t});'
  const callCloseIdx = fnBody.indexOf(callCloseNeedle, execIdx)
  if (callCloseIdx === -1) {
    console.log('[postinstall] could not find net use exec call close, skipping')
    return
  }

  const fnWithTry =
    fnBody.slice(0, execIdx) +
    ['/* AX_PATCH_NET_USE_GUARD */', '\ttry {', `\t${needle}`].join('\n') +
    fnBody.slice(execIdx + needle.length)

  const callCloseIdx2 = fnWithTry.indexOf(callCloseNeedle, execIdx)
  if (callCloseIdx2 === -1) {
    console.log('[postinstall] could not find net use exec call close after patch, skipping')
    return
  }
  const insertAt = callCloseIdx2 + callCloseNeedle.length
  const patchedFnBody =
    fnWithTry.slice(0, insertAt) +
    '\n\t} catch {\n\t\t// Some environments block `net use` (spawn EPERM). It is only an optimization.\n\t\t// Safe fallback: keep default realpath behavior.\n\t}\n' +
    fnWithTry.slice(insertAt)

  const patched = before + patchedFnBody + after

  if (patched === original) {
    console.log('[postinstall] patch had no effect, skipping')
    return
  }

  fs.writeFileSync(target, patched, 'utf8')
  console.log('[postinstall] patched vite to guard `net use` spawn errors')
}

patchFile()
