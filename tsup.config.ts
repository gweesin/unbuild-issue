import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['types/*.type.ts'],
    bundle: true,
    clean: true,
    outDir: 'dist/tsup',
    dts: {
        only: true,
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
})
