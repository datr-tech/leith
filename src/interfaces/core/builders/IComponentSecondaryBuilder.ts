import { IComponentSecondaryBuilderInput } from './IComponentSecondaryBuilderInput';
import { IComponentSecondaryBuilderOutput } from './IComponentSecondaryBuilderOutput';

export interface IComponentSecondaryBuilder {
  (args?: IComponentSecondaryBuilderInput): IComponentSecondaryBuilderOutput;
}
