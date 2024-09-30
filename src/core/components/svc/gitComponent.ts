import { IComponent } from '@app/interfaces/core/components';

export const gitComponent: IComponent = {
  name: 'projects/node',
  actions: {
    files: {
      write: [
        {
          'svc/gitIgnore.hbs': './.gitignore',
        },
      ],
    },
    commands: ['git init'],
  },
};
