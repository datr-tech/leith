import { projectComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('projectComponentBuilder', () => {
          describe('negative', () => {
            describe('should return an error', () => {
              test("when 'name' is an empty string", () => {
                // Arrange
                const name = '';
                const errorExpected = 'invalid type';

                // Act
                const handler = () => {
                  projectComponentBuilder({ name });
                };

                // Assert
                expect(handler).toThrow(errorExpected);
              });
            });
            describe('should return undefined', () => {
              test("when 'name' is an unknown string", () => {
                // Arrange
                const name = 'unknown';

                // Act
                const projectComponent = projectComponentBuilder({ name });

                // Assert
                expect(projectComponent).toBeUndefined();
              });
            });
          });
        });
      });
    });
  });
});
