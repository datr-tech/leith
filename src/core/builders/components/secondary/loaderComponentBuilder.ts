import { IComponentSecondaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { tsLoaderComponent } from '@app/core/components/secondary/loaders';

export const loaderComponentBuilder: IComponentSecondaryBuilder = ({ languageComponent }) => {
  let loaderComponent: IComponent;

  if (typeof languageComponent === 'undefined') {
    throw new Error('undefined languageComponent');
  }

  if (languageComponent.name === 'languages/typescript') {
    loaderComponent = tsLoaderComponent;
  }

  return loaderComponent;
};
