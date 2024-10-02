import { languageComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('languageComponentBuilder', () => {
          describe('negative', () => {
            describe('should return an error', () => {
              test("when 'name' is an empty string", () => {
                // Arrange
                const name = '';
                const errorExpected = 'invalid type';

                // Act
                const handler = () => {
                  languageComponentBuilder({ name });
                };

                // Assert
                expect(handler).toThrow(errorExpected);
              });
            });
          });
        });
      });
    });
  });
});
