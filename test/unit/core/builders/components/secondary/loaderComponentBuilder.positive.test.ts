import { loaderComponentBuilder } from '@app/core/builders/components/secondary';
import { typescriptComponent } from '@app/core/components/primary/languages';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('loaderComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected loader component', () => {
              // Arrange
              const languageComponent = typescriptComponent;
              const nameExpected = 'loaders/tsLoader';

              // Act
              const loaderComponent = loaderComponentBuilder({ languageComponent });
              const nameFound = loaderComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
