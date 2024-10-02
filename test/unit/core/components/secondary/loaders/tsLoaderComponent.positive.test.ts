import { tsLoaderComponent } from '../../../../../../src/core/components/secondary/loaders';

describe('core', () => {
  describe('components', () => {
    describe('secondary', () => {
      describe('loaders', () => {
        describe('tsLoaderComponent', () => {
          describe('positive', () => {
            test("the value of the 'name' prop should be 'loaders/tsLoader'", () => {
              // Arrange
              const nameExpected = 'loaders/tsLoader';

              // Act
              const nameFound = tsLoaderComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
            test("the value of the 'dependencies' prop should be the expected array", () => {
              // Arrange
              const dependenciesExpected = ['ts-loader'];

              // Act
              const dependenciesFound = tsLoaderComponent.dependencies;

              // Assert
              expect(dependenciesFound).toEqual(dependenciesExpected);
            });
            test("the value of the 'requires' prop should be ['languages/typescript']", () => {
              // Arrange
              const requiresExpected = ['languages/typescript'];

              // Act
              const requiresFound = tsLoaderComponent.requires;

              // Assert
              expect(requiresFound).toEqual(requiresExpected);
            });
          });
        });
      });
    });
  });
});
