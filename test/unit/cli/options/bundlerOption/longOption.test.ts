import { bundlerOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('bundlerOption', () => {
      describe('longOption', () => {
        test("should be '--bundler", () => {
          // Arrange
          const expected = '--bundler';

          // Act
          const { long } = bundlerOption;

          // Assert
          expect(long).toEqual(expected);
        });
      });
    });
  });
});
