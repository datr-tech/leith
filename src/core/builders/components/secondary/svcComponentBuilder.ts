import { IComponentSecondaryBuilder } from '@app/interfaces/core/builders';
import { gitComponent } from '@app/core/components/secondary/svc';

export const svcComponentBuilder: IComponentSecondaryBuilder = () => gitComponent;
