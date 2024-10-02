import { languageComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('languageComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected language component', () => {
              // Arrange
              const type = 'languages/typescript';
              const nameExpected = type;

              // Act
              const languageComponent = languageComponentBuilder({ type });
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
