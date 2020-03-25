// https://jestjs.io/docs/en/configuration

module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Css(.*)$': '<rootDir>/src/css$1',
  },
};
