import typescript from "rollup-plugin-typescript2";
import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json';

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.tsx";

const plugins = [
    postcss({
        plugins: [],
        extract: true,
        autoModules: true,
    })
]

const cjsPlugins = [
    cleaner({
        targets: ['./cjs/esm/']
    }),
    typescript({
        typescript: require('typescript'),
        tsconfigOverride: { compilerOptions: { declaration: false }, exclude: ["src/**/__tests__"] }
    }),
    ...plugins
]

const esmPlugins = [
    cleaner({
        targets: ['./lib/esm/']
    }),
    typescript({
        typescript: require('typescript'),
        tsconfigOverride: { exclude: ["src/**/__tests__"] }
    }),
    ...plugins
]

const external = [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
]

export default [
    {
        input,
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: false
        },
        plugins: cjsPlugins,
        extensions,
        external
    },
    {
        input,
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: false
        },
        plugins: esmPlugins,
        extensions,
        external
    },
]
