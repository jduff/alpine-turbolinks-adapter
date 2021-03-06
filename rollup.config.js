import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'Alpine',
      file: 'dist/alpine-turbolinks-adapter.js',
      format: 'umd'
    },
    {
      name: 'Alpine',
      file: 'dist/alpine-turbolinks-adapter.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    filesize(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
