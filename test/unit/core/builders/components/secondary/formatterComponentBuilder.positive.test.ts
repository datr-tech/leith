import { formatterComponentBuilder } from '@app/core/builders/components/secondary';
import { typescriptComponent } from '@app/core/components/primary/languages';
import { eslintTypescriptComponent } from '@app/core/components/secondary/linters';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('formatterComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected formatter component', () => {
              // Arrange
              const languageComponent = typescriptComponent;
              const linterComponent = eslintTypescriptComponent;
              const nameExpected = 'formatters/prettier/eslint';

              // Act
              const formatterComponent = formatterComponentBuilder({ languageComponent, linterComponent });
              const nameFound = formatterComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
