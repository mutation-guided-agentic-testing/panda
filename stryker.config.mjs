// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'pnpm',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  testRunner: 'vitest',
  coverageAnalysis: 'perTest',
  buildCommand: 'tsc --noEmit',
  plugins: ['@stryker-mutator/vitest-runner', '@stryker-mutator/typescript-checker'],
  // Additions
  mutate: ['packages/core/src/**/*.ts', '!packages/core/src/**/*.d.ts'],
  testFiles: ['packages/core/__tests__/**/*.test.ts'],
  ignoreStatic: true,
  jsonReporter: {
    fileName: '../reports/panda/stryker-mutations.json',
  },
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
  incremental: true,
}
export default config
