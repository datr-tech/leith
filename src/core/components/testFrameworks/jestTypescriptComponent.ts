import { IComponent } from '@app/interfaces/core/components';

export const jestTypescriptComponent: IComponent = {
  name: 'testFrameworks/jest/typescript',
  dependencies: ['@babel/preset-typescript', '@jest/globals', '@types/jest', 'jest', 'ts-jest'],
  requires: ['languages/typescript'],
};
