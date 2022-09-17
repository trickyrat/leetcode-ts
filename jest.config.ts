
import type { Config } from 'jest';

const config: Config = {
  roots: [
    "<rootDir>/test"
  ],
  testRegex: 'test/(.+)\\.(test|Test)\\.(jsx?|tsx?)$',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

export default config;
