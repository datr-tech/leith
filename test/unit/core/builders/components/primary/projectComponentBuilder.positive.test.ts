import { projectComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('projectComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected project component', () => {
              // Arrange
              const type = 'projects/node';
              const nameExpected = type;

              // Act
              const projectComponent = projectComponentBuilder({ type });
              const nameFound = projectComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
          });
        });
      });
    });
  });
});
