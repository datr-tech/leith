import { IComponent } from '@app/interfaces/core/components';

export const prettierEslintComponent: IComponent = {
  name: 'formatters/prettier/eslint',
  dependencies: ['eslint-config-prettier', 'eslint-plugin-prettier', 'prettier'],
  requires: ['linters/eslint'],
  scripts: {
    'format:base': "npx prettier --config ./.prettierrc './src/**/*.ts' './test/**/*.ts'",
    'format:check': 'npm run format:base -- --check',
    'format:write': 'npm run format:base -- --write',
    format: 'npm run format:write',
  },
  actions: {
    files: {
      write: [
        {
          'formatters/prettierEslint.hbs': './.prettierrc',
        },
      ],
    },
  },
};
