import { bundlerOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('bundlerOption', () => {
      describe('attributeName', () => {
        test("should be 'bundler'", () => {
          // Arrange
          const expected = 'bundler';

          // Act
          const attributeName = bundlerOption.attributeName();

          // Assert
          expect(attributeName).toEqual(expected);
        });
      });
    });
  });
});
