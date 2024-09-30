import { formatterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('formatterOption', () => {
      describe('shortOption', () => {
        test("should be '-f", () => {
          // Arrange
          const expected = '-f';

          // Act
          const { short } = formatterOption;

          // Assert
          expect(short).toEqual(expected);
        });
      });
    });
  });
});
