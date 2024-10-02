import { IComponentBuilderInput } from './IComponentBuilderInput';
import { IComponentBuilderOutput } from './IComponentBuilderOutput';

export interface IComponentBuilder {
  (args: IComponentBuilderInput): IComponentBuilderOutput;
}
