import { bundlerOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('bundlerOption', () => {
      describe('shortOption', () => {
        test("should be '-b", () => {
          // Arrange
          const expected = '-b';

          // Act
          const { short } = bundlerOption;

          // Assert
          expect(short).toEqual(expected);
        });
      });
    });
  });
});
