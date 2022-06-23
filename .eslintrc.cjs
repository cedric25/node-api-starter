module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},

  // For test files
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.test.js'],
      extends: ['plugin:jest/all'],
      rules: {
        'jest/prefer-expect-assertions': ['off'], // Too annoying, let's disable it for now
      },
    },
  ],
}
