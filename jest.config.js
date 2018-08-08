module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '**/*.js',
    '!**/*.setup.js',
    '!**/*.config.js',
    '!**/configs/*',
    '!**/constants/*',
    '!**/coverage/lcov-report/*',
    '!index.js',
    '!state/**/index.js'
  ],
  setupFiles: ['./jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
