import { jestTypescriptComponent } from '@app/core/components/testFrameworks';

describe('core', () => {
  describe('components', () => {
    describe('testFrameworks', () => {
      describe('jestTypescriptComponent', () => {
        describe('positive', () => {
          test("the value of the 'name' prop should be 'testFrameworks/jest/typescript'", () => {
            // Arrange
            const nameExpected = 'testFrameworks/jest/typescript';

            // Act
            const nameFound = jestTypescriptComponent.name;

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
          test("the value of the 'dependencies' prop should be the expected array", () => {
            // Arrange
            const dependenciesExpected = [
              '@babel/preset-typescript',
              '@jest/globals',
              '@types/jest',
              'jest',
              'ts-jest',
            ];

            // Act
            const dependenciesFound = jestTypescriptComponent.dependencies;

            // Assert
            expect(dependenciesFound).toEqual(dependenciesExpected);
          });
          test("the value of the 'requires' prop should be ['languages/typescript']", () => {
            // Arrange
            const requiresExpected = ['languages/typescript'];

            // Act
            const requiresFound = jestTypescriptComponent.requires;

            // Assert
            expect(requiresFound).toEqual(requiresExpected);
          });
        });
      });
    });
  });
});
