import { bundlerOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('bundlerOption', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected =
            "The new project's bundler. Defaults to WEBPACK.";

          // Act
          const { description } = bundlerOption;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
