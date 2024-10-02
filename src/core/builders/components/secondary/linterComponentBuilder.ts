import { IComponentSecondaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { eslintTypescriptComponent } from '@app/core/components/secondary/linters';

export const linterComponentBuilder: IComponentSecondaryBuilder = ({ languageComponent }) => {
  let linterComponent: IComponent;

  if (typeof languageComponent === 'undefined') {
    throw new Error('undefined languageComponent');
  }

  if (languageComponent.name === 'languages/typescript') {
    linterComponent = eslintTypescriptComponent;
  }

  return linterComponent;
};
