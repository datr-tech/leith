import { IComponent } from '@app/interfaces/core/components';

export const gitComponent: IComponent = {
  name: 'svc/git',
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
