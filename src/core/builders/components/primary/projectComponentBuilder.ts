import { IComponentPrimaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { nodeComponent } from '@app/core/components/primary/projects';

export const projectComponentBuilder: IComponentPrimaryBuilder = ({ type }) => {
  let projectComponent: IComponent;

  if (nodeComponent.name === type) {
    projectComponent = nodeComponent;
  }

  return projectComponent;
};
