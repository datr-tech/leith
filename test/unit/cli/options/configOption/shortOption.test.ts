import { configOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('configOption', () => {
      describe('shortOption', () => {
        test("should be '-c", () => {
          // Arrange
          const expected = '-c';

          // Act
          const { short } = configOption;

          // Assert
          expect(short).toEqual(expected);
        });
      });
    });
  });
});
