import { IComponent } from '@app/interfaces/core/components';

export const eslintTypescriptComponent: IComponent = {
  name: 'linters/eslint/typescript',
  dependencies: ['@eslint/compat', '@eslint/eslintrc', '@eslint/js', 'typescript-eslint'],
  requires: ['languages/typescript'],
  scripts: {
    'lint:base': 'npx eslint --config ./eslint.config.mjs',
    lint: 'npm run lint:base -- --fix',
  },
  actions: {
    files: {
      write: [
        {
          'linters/eslintTypescript.hbs': './eslint.config.mjs',
        },
      ],
    },
  },
};
