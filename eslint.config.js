const js = require('@eslint/js')

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
            globals: {
                console: 'readonly',
                process: 'readonly',
                global: 'writable',
                require: 'readonly',
                module: 'readonly',
                exports: 'writable',
                __dirname: 'readonly',
                __filename: 'readonly',
                Buffer: 'readonly',
            },
        },
        rules: {},
    },
]
