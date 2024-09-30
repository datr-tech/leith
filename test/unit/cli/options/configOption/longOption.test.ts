import { configOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('configOption', () => {
      describe('longOption', () => {
        test("should be '--config", () => {
          // Arrange
          const expected = '--config';

          // Act
          const { long } = configOption;

          // Assert
          expect(long).toEqual(expected);
        });
      });
    });
  });
});
