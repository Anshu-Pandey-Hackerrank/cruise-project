/** @type { import('jest').Config } */
module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  env: { VITE_API_URL: 'http://localhost:8080' },
                },
              },
            },
          ],
        },
      },
    ],
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};
