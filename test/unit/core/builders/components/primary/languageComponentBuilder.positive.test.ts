import { languageComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('languageComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected language component', () => {
              // Arrange
              const name = 'languages/typescript';
              const nameExpected = name;

              // Act
              const languageComponent = languageComponentBuilder({ name });
              const nameFound = languageComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
