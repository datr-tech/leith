import { formatterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('formatterOption', () => {
      describe('longOption', () => {
        test("should be '--formatter", () => {
          // Arrange
          const expected = '--formatter';

          // Act
          const { long } = formatterOption;

          // Assert
          expect(long).toEqual(expected);
        });
      });
    });
  });
});
