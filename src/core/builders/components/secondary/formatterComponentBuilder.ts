import { IComponentSecondaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { prettierEslintComponent } from '@app/core/components/secondary/formatters';

export const formatterComponentBuilder: IComponentSecondaryBuilder = ({ languageComponent, linterComponent }) => {
  let formatterComponent: IComponent;

  if (typeof languageComponent === 'undefined') {
    throw new Error('undefined languageComponent');
  }

  if (typeof linterComponent === 'undefined') {
    throw new Error('undefined linterComponent');
  }

  if (languageComponent.name === 'languages/typescript') {
    if (linterComponent.name === 'linters/eslint/typescript') {
      formatterComponent = prettierEslintComponent;
    }
  }

  return formatterComponent;
};
