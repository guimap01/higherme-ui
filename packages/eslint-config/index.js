module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort', 'import'],
  rules: {
    semicolon: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'error',
      { semi: true, singleQuote: true, trailingComma: 'es5' },
    ],
    'react/display-name': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-use-before-define': 'off',
    "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
