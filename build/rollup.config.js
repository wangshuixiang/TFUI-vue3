// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from "rollup-plugin-babel";
import path from 'path'
// import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json'
import scss from 'rollup-plugin-scss'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')

export default [
  {
    input: path.resolve(__dirname, '../packages/index.ts'),
    output: [
      {
        format: 'es',
        file: pkg.module,
      }
    ],
    plugins: [
      terser(),
      nodeResolve(),
      scss(),
      // commonjs(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
        externalHelpers: true
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          'include': [
            'packages/**/*',
            'typings/shims-vue.d.ts',
          ],
          'exclude': [
            'node_modules',
            'packages/**/__tests__/*',
          ],
        },
        abortOnError: false,
      }),
    ],
    external (id) {
      return /^vue/.test(id)
        || deps.some(k => new RegExp('^' + k).test(id))
    },
  },
]