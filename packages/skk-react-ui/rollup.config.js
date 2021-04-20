import typescript from "rollup-plugin-typescript2";
import pkg from './package.json';

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.tsx";

const plugins = [
    typescript({
        typescript: require('typescript')
    })
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
        extensions,
        plugins,
        external
    },
    {
        input,
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: false
        },
        extensions,
        plugins,
        external
    },
]
