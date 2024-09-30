import { linterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('linterOption', () => {
      describe('attributeName', () => {
        test("should be 'linter'", () => {
          // Arrange
          const expected = 'linter';

          // Act
          const attributeName = linterOption.attributeName();

          // Assert
          expect(attributeName).toEqual(expected);
        });
      });
    });
  });
});
