import { IComponentSecondaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { jestTypescriptComponent } from '@app/core/components/secondary/testFrameworks';

export const testFrameworkComponentBuilder: IComponentSecondaryBuilder = ({ languageComponent }) => {
  let testFrameworksComponent: IComponent;

  if (typeof languageComponent === 'undefined') {
    throw new Error('undefined languageComponent');
  }

  if (languageComponent.name === 'languages/typescript') {
    testFrameworksComponent = jestTypescriptComponent;
  }

  return testFrameworksComponent;
};
