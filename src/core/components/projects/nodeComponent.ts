import { IComponent } from '@app/interfaces/core/components';

export const nodeComponent: IComponent = {
  name: 'languages/typescript',
  dependencies: ['@types/node'],
  actions: {
    files: {
      write: [
        {
          'projects/readme.hbs': './README.md',
          'projects/npmIgnore.hbs': './.npmignore',
          'projects/packageJson.hbs': './package.json',
        },
      ],
    },
  },
};
