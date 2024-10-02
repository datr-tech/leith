import { languageComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('languageComponentBuilder', () => {
          describe('negative', () => {
            describe('should return an error', () => {
              test("when 'type' is an empty string", () => {
                // Arrange
                const type = '';
                const errorExpected = 'invalid type';

                // Act
                const handler = () => {
                  languageComponentBuilder({ type });
                };

                // Assert
                expect(handler).toThrow(errorExpected);
              });
            });
            describe('should return undefined', () => {
              test("when 'type' is an unknown string", () => {
                // Arrange
                const type = 'unknown';

                // Act
                const languageComponent = languageComponentBuilder({ type });

                // Assert
                expect(languageComponent).toBeUndefined();
              });
            });
          });
        });
      });
    });
  });
});
