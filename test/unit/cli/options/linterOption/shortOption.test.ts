import { linterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('linterOption', () => {
      describe('shortOption', () => {
        test("should be '-l", () => {
          // Arrange
          const expected = '-l';

          // Act
          const { short } = linterOption;

          // Assert
          expect(short).toEqual(expected);
        });
      });
    });
  });
});
