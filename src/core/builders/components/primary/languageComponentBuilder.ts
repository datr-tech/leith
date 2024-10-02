import { IComponentPrimaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { typescriptComponent } from '@app/core/components/primary/languages';

export const languageComponentBuilder: IComponentPrimaryBuilder = ({ name }) => {
  let languageComponent: IComponent = undefined;

  if (name === '') {
    throw new Error('invalid type');
  }

  if (typescriptComponent.name === name) {
    languageComponent = typescriptComponent;
  }

  return languageComponent;
};
