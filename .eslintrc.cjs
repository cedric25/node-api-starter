module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint', 'no-only-tests', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },

  rules: {},

  // Tests
  overrides: [
    {
      files: ['*.spec.ts', '*.test.ts'],
      env: {
        mocha: true,
      },
      rules: {
        'no-only-tests/no-only-tests': 'error',
      },
    },
  ],
}
