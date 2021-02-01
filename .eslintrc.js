module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/__tests__/*.js',
        '**/__tests__/*.jsx',
      ],
      env: {
        jest: true,
      },
    },
  ],

  plugins: ['react', '@typescript-eslint', 'jest', 'cypress'],
  rules: {strict: ['error', 'never']},
  settings: {
    react: {
      version: 'detect',
    },
  },
}
