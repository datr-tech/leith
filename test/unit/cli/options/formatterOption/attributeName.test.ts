import { formatterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('formatterOption', () => {
      describe('attributeName', () => {
        test("should be 'formatter'", () => {
          // Arrange
          const expected = 'formatter';

          // Act
          const attributeName = formatterOption.attributeName();

          // Assert
          expect(attributeName).toEqual(expected);
        });
      });
    });
  });
});
