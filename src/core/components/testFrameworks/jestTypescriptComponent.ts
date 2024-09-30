import { IComponent } from '@app/interfaces/core/components';

export const jestTypescriptComponent: IComponent = {
  name: 'testFrameworks/jest/typescript',
  dependencies: ['@babel/preset-typescript', '@jest/globals', '@types/jest', 'jest', 'ts-jest'],
  requires: ['languages/typescript'],
  scripts: {
    'test:unit': 'npx jest ./test/unit --coverage=false',
    'test:unit:cov': 'npm run test:unit -- --coverage',
    'test:unit:changed': 'npm run test:unit -- -o',
    test: 'npm run test:unit:cov',
  },
  actions: {
    dirs: [
      {
        create: './.jest',
      },
    ],
    files: {
      write: [
        {
          'linters/eslintTypescript.hbs': './eslint.config.mjs',
        },
      ],
    },
  },
};
