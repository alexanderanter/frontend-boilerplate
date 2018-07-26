module.exports = {
  verbose: true,
  collectCoverageFrom: [
    './**/*.jsx',
    './**/*.js',
    '!./**/*.setup.js',
    '!./**/*.config.js',
    '!./coverage/lcov-report/*'
  ],
  setupFiles: ['./jest.setup.js'],
  roots: ['./'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
