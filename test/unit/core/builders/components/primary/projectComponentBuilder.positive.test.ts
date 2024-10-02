import { projectComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('projectComponentBuilder', () => {
          describe('positive', () => {
            test('should return the expected project component', () => {
              // Arrange
              const name = 'projects/node';
              const nameExpected = name;

              // Act
              const projectComponent = projectComponentBuilder({ name });
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
