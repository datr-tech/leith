import { languageComponentBuilder, projectComponentBuilder } from '@app/core/builders/components/primary';
import {
  bundlerComponentBuilder,
  formatterComponentBuilder,
  linterComponentBuilder,
  loaderComponentBuilder,
  svcComponentBuilder,
  testFrameworkComponentBuilder,
} from '@app/core/builders/components/secondary';
import { IComponentBuilder } from '@app/interfaces/core/builders';

export const componentBuilder: IComponentBuilder = ({ options }) => {
  const buildPrimaryComponents = ({ options }) => ({
    projectComponent: projectComponentBuilder({ type: options.project.name }),
    languageComponent: languageComponentBuilder({ type: options.language.name }),
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

  const { projectComponent, languageComponent } = buildPrimaryComponents({ options });
  const secondaryComponents = buildSecondaryComponents({ languageComponent });
  const primaryComponents = [projectComponent, languageComponent];

  return primaryComponents.concat(secondaryComponents);
};
