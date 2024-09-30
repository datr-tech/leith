import { projectOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('projectOption', () => {
      describe('shortOption', () => {
        test("should be '-p", () => {
          // Arrange
          const expected = '-p';

          // Act
          const { short } = projectOption;

          // Assert
          expect(short).toEqual(expected);
        });
      });
    });
  });
});
