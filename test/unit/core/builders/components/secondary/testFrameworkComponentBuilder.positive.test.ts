import { testFrameworkComponentBuilder } from '@app/core/builders/components/secondary';
import { typescriptComponent } from '@app/core/components/primary/languages';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('testFrameworkComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected testFrameworkComponent', () => {
              // Arrange
              const languageComponent = typescriptComponent;
              const nameExpected = 'testFrameworks/jest/typescript';

              // Act
              const testFrameworkComponent = testFrameworkComponentBuilder({ languageComponent });
              const nameFound = testFrameworkComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
