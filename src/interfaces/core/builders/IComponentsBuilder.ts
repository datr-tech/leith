import { IComponentsBuilderInput } from './IComponentsBuilderInput';
import { IComponentsBuilderOutput } from './IComponentsBuilderOutput';

export interface IComponentsBuilder {
  (args: IComponentsBuilderInput): IComponentsBuilderOutput;
}
