import { IComponentSecondaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { prettierEslintComponent } from '@app/core/components/secondary/formatters';

export const formatterComponentBuilder: IComponentSecondaryBuilder = ({ languageComponent, linterComponent }) => {
  let formatterComponent: IComponent;

  if (languageComponent.name === 'languages/typescript') {
    if (linterComponent.name === 'linters/eslint/typescript') {
      formatterComponent = prettierEslintComponent;
    }
  }

  return formatterComponent;
};
