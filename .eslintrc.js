module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': ['off'],
    'arrow-parens': ['warn', 'as-needed'],
    'no-lone-blocks': ['off'],
    // 'array-element-newline': ['warn', { minItems: 4 }],
    // '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/ban-ts-ignore': ['warn'],
  },
}
