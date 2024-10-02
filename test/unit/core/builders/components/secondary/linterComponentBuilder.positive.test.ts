import { linterComponentBuilder } from '@app/core/builders/components/secondary';
import { typescriptComponent } from '@app/core/components/primary/languages';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('linterComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected linter component', () => {
              // Arrange
              const languageComponent = typescriptComponent;
              const nameExpected = 'linters/eslint/typescript';

              // Act
              const linterComponent = linterComponentBuilder({ languageComponent });
              const nameFound = linterComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
