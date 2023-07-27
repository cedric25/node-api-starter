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
  "overrides": [{
    "files": ["*.spec.ts", "*.test.ts"],
    "globals": {
      "describe": true,
      "it": true,
    }
  }]
}
