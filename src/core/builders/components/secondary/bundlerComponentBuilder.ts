import { IComponentSecondaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { webpackTypescriptComponent } from '@app/core/components/secondary/bundlers';

export const bundlerComponentBuilder: IComponentSecondaryBuilder = ({ languageComponent }) => {
  let bundlerComponent: IComponent;

  if (languageComponent.name === 'languages/typescript') {
    bundlerComponent = webpackTypescriptComponent;
  }

  return bundlerComponent;
};
