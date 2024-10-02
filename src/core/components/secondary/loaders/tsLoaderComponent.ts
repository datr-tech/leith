import { IComponent } from '@app/interfaces/core/components';

export const tsLoaderComponent: IComponent = {
  name: 'loaders/tsLoader',
  dependencies: ['ts-loader'],
  requires: ['languages/typescript'],
};
