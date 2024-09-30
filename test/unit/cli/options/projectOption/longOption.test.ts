import { projectOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('projectOption', () => {
      describe('longOption', () => {
        test("should be '--project", () => {
          // Arrange
          const expected = '--project';

          // Act
          const { long } = projectOption;

          // Assert
          expect(long).toEqual(expected);
        });
      });
    });
  });
});
