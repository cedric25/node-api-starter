module.exports = {
  require: ['tsx'],
  spec: 'src/**/*.test.ts',
  file: './test/int/setup.ts',
  timeout: 5000,
  color: true,
  'check-leaks': true,
  exit: true,
}
