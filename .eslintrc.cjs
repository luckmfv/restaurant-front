/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-fallthrough': 'off',
    'quotes': ['error', 'single'],
    'max-len': ['error', { 'code': 130 }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'key-spacing': ['error', { 'afterColon': true }],
    'space-before-function-paren': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'indent': ['error', 2],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        'array': true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-shadow': ['error']
  }
}
