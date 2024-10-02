import { projectComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('projectComponentBuilder', () => {
          describe('negative', () => {
            describe('should return an error', () => {
              test("when 'type' is an empty string", () => {
                // Arrange
                const type = '';
                const errorExpected = 'invalid type';

                // Act
                const handler = () => {
                  projectComponentBuilder({ type });
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
                const projectComponent = projectComponentBuilder({ type });

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
