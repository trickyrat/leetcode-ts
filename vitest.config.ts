import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
        // globals: true,
        coverage: {
            provider: 'v8', // v8 or istanbul
            reporter: ['html-spa']
        },
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
        ],
        include: [
            './test/**/*.test.ts'
        ]
    },
})