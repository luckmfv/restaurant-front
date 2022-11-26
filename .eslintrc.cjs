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
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'max-len': ['error', { 'code': 150 }],
    'quotes': ['error', 'single'],
    '@typescript-eslint/quotes': ['error', 'single'],
    'key-spacing': ['error', { 'afterColon': true }],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
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
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'prefer-destructuring': ['error', {
      'array': true
    }
    ]
  }
}
