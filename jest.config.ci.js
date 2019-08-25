const base = require('./jest.config.js')

module.exports = Object.assign({}, base, {
    collectCoverage: true,
    reporters: ['default','jest-junit'],
    collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!**/node_modules/**', '!lib/index.tsx'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'text-lcov']
})