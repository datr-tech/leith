import { projectOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('projectOption', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected =
              "The new project's type. Defaults to NODE.";

          // Act
          const { description } = projectOption;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
