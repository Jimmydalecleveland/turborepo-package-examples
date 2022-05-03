import babel from '@rollup/plugin-babel'
// import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'

// extension are needed in both `resolve` and `babel`
// plugins to import .ts, .tsx, .jsx file properly.
const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      exports: "named",
      preserveModules: true,
      sourcemap: true,
    }
  ],
  external: [
    'react',
    '@stitches/core',
    'react/jsx-runtime',
    'react/jsx-dev-runtime'
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    resolve({
      extensions,
    }),
    // typescript(),
    babel({
      babelHelpers: "bundled",
      extensions,
    })
  ]
}
