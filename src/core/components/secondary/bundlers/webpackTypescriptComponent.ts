import { IComponent } from '@app/interfaces/core/components';

export const webpackTypescriptComponent: IComponent = {
  name: 'bundlers/webpack/typescript',
  dependencies: ['webpack', 'webpack-cli'],
  requires: ['languages/typescript', 'loaders/tsLoader'],
  scripts: {
    build: 'npx webpack --mode production',
  },
  actions: {
    files: {
      write: [
        {
          'bundlers/webpackTypeScript.hbs': 'webpack.config.mjs',
        },
      ],
    },
  },
};
