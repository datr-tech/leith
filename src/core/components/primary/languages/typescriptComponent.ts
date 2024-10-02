import { IComponent } from '@app/interfaces/core/components';

export const typescriptComponent: IComponent = {
  name: 'languages/typescript',
  dependencies: ['typescript'],
  actions: {
    files: {
      write: [
        {
          'languages/typescript.hbs': './tsconfig.json',
        },
      ],
    },
  },
};
