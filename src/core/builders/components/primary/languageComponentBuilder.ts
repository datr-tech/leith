import { IComponentPrimaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { typescriptComponent } from '@app/core/components/primary/languages';

export const languageComponentBuilder: IComponentPrimaryBuilder = ({ type }) => {
  let languageComponent: IComponent = undefined;

  if (type === '') {
    throw new Error('invalid type');
  }

  if (typescriptComponent.name === type) {
    languageComponent = typescriptComponent;
  }

  return languageComponent;
};
