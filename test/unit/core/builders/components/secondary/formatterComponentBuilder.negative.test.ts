import { formatterComponentBuilder } from '@app/core/builders/components/secondary';
import { typescriptComponent } from '@app/core/components/primary/languages';
import { eslintTypescriptComponent } from '@app/core/components/secondary/linters';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('formatterComponentBuilder', () => {
          describe('negative', () => {
            describe('should return an error', () => {
              test("when 'languageComponent' has not been received", () => {
                // Arrange
                const errorExpected = 'undefined languageComponent';

                // Act
                const handler = () => {
                  formatterComponentBuilder({});
                };

                // Assert
                expect(handler).toThrow(errorExpected);
              });

              test("when 'languageComponent' is undefined", () => {
                // Arrange
                const languageComponent = undefined;
                const errorExpected = 'undefined languageComponent';

                // Act
                const handler = () => {
                  formatterComponentBuilder({ languageComponent });
                };

                // Assert
                expect(handler).toThrow(errorExpected);
              });
            });
            describe('should return undefined', () => {
              test("when 'languageComponent.name' is unknown", () => {
                // Arrange
                const languageComponent = typescriptComponent;
                languageComponent.name = 'unknown';

                // Act
                const bundlerComponent = formatterComponentBuilder({ languageComponent });

                // Assert
                expect(bundlerComponent).toBeUndefined();
              });
              test("when 'linterComponent' is undefined", () => {
                // Arrange
                const languageComponent = typescriptComponent;
                const linterComponent = undefined;
                languageComponent.name = 'unknown';

                // Act
                const bundlerComponent = formatterComponentBuilder({ languageComponent, linterComponent });

                // Assert
                expect(bundlerComponent).toBeUndefined();
              });
              test("when 'linterComponent.name' is undefined", () => {
                // Arrange
                const languageComponent = typescriptComponent;
                const linterComponent = eslintTypescriptComponent;
                languageComponent.name = 'unknown';
                linterComponent.name = undefined;

                // Act
                const bundlerComponent = formatterComponentBuilder({ languageComponent, linterComponent });

                // Assert
                expect(bundlerComponent).toBeUndefined();
              });
              test("when 'linterComponent.name' is unknown", () => {
                // Arrange
                const languageComponent = typescriptComponent;
                const linterComponent = eslintTypescriptComponent;
                languageComponent.name = 'unknown';
                linterComponent.name = 'unknown';

                // Act
                const bundlerComponent = formatterComponentBuilder({ languageComponent, linterComponent });

                // Assert
                expect(bundlerComponent).toBeUndefined();
              });
            });
          });
        });
      });
    });
  });
});
