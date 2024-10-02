import { svcComponentBuilder } from '@app/core/builders/components/secondary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('secondary', () => {
        describe('svcComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected svc component', () => {
              // Arrange
              const nameExpected = 'svc/git';

              // Act
              const svcComponent = svcComponentBuilder();
              const nameFound = svcComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
