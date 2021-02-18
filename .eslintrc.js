module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: [
            'backend/tsconfig.json',
            'common/tsconfig.json',
        ],
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/strict-boolean-expressions': 'warn',
    },
};
