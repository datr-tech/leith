import { configOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('configOption', () => {
      describe('attributeName', () => {
        test("should be 'config'", () => {
          // Arrange
          const expected = 'config';

          // Act
          const attributeName = configOption.attributeName();

          // Assert
          expect(attributeName).toEqual(expected);
        });
      });
    });
  });
});
