import { IComponentBuilderInputLanguage } from './IComponentBuilderInputLanguage';
import { IComponentBuilderInputProject } from './IComponentBuilderInputProject';

export interface IComponentBuilderInput {
  options: {
    language: IComponentBuilderInputLanguage;
    project: IComponentBuilderInputProject;
  };
}
