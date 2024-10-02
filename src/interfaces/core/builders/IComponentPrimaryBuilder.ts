import { IComponentPrimaryBuilderInput } from './IComponentPrimaryBuilderInput';
import { IComponentPrimaryBuilderOutput } from './IComponentPrimaryBuilderOutput';

export interface IComponentPrimaryBuilder {
  (args?: IComponentPrimaryBuilderInput): IComponentPrimaryBuilderOutput;
}
