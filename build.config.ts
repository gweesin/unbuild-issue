import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
    entries: [
        {
            builder: 'mkdist',
            input: './types/',
            outDir: './dist/unbuild',
        }
    ],
    declaration: true,
    clean: true,
    rollup: {
        dts: {
            compilerOptions: {
                noEmitOnError: false,
                strict: false,
                alwaysStrict: false,
                skipLibCheck: true,
                skipDefaultLibCheck: true,
                paths: {
                    '@/*': ['./src/*'],
                }
            }
        }
    }
})
