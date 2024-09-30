import { linterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('linterOption', () => {
      describe('longOption', () => {
        test("should be '--linter", () => {
          // Arrange
          const expected = '--linter';

          // Act
          const { long } = linterOption;

          // Assert
          expect(long).toEqual(expected);
        });
      });
    });
  });
});
