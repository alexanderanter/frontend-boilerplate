module.exports = {
  verbose: true,
  collectCoverageFrom: [
    './**/*.{js, jsx}',
    '!./**/*.setup.js',
    '!./**/*.config.js',
    '!./coverage/lcov-report/*'
  ],
  setupFiles: ['./jest.setup.js'],
  roots: ['./'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
