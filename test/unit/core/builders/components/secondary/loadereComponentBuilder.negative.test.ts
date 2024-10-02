import { loaderComponentBuilder } from '@app/core/builders/components/secondary';
import { typescriptComponent } from '@app/core/components/primary/languages';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('loaderComponentBuilder', () => {
          describe('negative', () => {
            describe('should return an error', () => {
              test("when 'languageComponent' has not been received", () => {
                // Arrange
                const errorExpected = 'undefined languageComponent';

                // Act
                const handler = () => {
                  loaderComponentBuilder({});
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
                  loaderComponentBuilder({ languageComponent });
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
                const bundlerComponent = loaderComponentBuilder({ languageComponent });

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
