import { bundlerComponentBuilder } from '@app/core/builders/components/secondary';
import { typescriptComponent } from '@app/core/components/primary/languages';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('bundlerComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected bundler component', () => {
              // Arrange
              const languageComponent = typescriptComponent;
              const nameExpected = 'bundlers/webpack/typescript';

              // Act
              const bundlerComponent = bundlerComponentBuilder({ languageComponent });
              const nameFound = bundlerComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
