import { IComponentPrimaryBuilder } from '@app/interfaces/core/builders';
import { IComponent } from '@app/interfaces/core/components';
import { nodeComponent } from '@app/core/components/primary/projects';

export const projectComponentBuilder: IComponentPrimaryBuilder = ({ name }) => {
  let projectComponent: IComponent;

  if (name === '') {
    throw new Error('invalid type');
  }

  if (nodeComponent.name === name) {
    projectComponent = nodeComponent;
  }

  return projectComponent;
};
