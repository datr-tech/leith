import { languageComponentBuilder, projectComponentBuilder } from '@app/core/builders/components/primary';
import {
  bundlerComponentBuilder,
  formatterComponentBuilder,
  linterComponentBuilder,
  loaderComponentBuilder,
  svcComponentBuilder,
  testFrameworkComponentBuilder,
} from '@app/core/builders/components/secondary';
import { IComponentsBuilder } from '@app/interfaces/core/builders';

export const componentsBuilder: IComponentsBuilder = ({ language, project }) => {
  const buildPrimaryComponents = ({ language, project }) => ({
    projectComponent: projectComponentBuilder({ name: project.name }),
    languageComponent: languageComponentBuilder({ name: language.name }),
  });

  const buildSecondaryComponents = ({ languageComponent }) => {
    const loaderComponent = loaderComponentBuilder({ languageComponent });
    const bundlerComponent = bundlerComponentBuilder({ languageComponent });
    const linterComponent = linterComponentBuilder({ languageComponent });
    const formatterComponent = formatterComponentBuilder({ languageComponent, linterComponent });
    const testFrameworkComponent = testFrameworkComponentBuilder({ languageComponent });
    const svcComponent = svcComponentBuilder();

    return [
      loaderComponent,
      bundlerComponent,
      linterComponent,
      formatterComponent,
      testFrameworkComponent,
      svcComponent,
    ];
  };

  const { projectComponent, languageComponent } = buildPrimaryComponents({ language, project });
  if (typeof projectComponent === 'undefined' || typeof languageComponent === 'undefined') {
    return [];
  }
  const secondaryComponents = buildSecondaryComponents({ languageComponent });
  const primaryComponents = [projectComponent, languageComponent];

  return primaryComponents.concat(secondaryComponents);
};
