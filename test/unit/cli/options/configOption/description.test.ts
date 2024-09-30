import { configOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('configOption', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'The path to the config file.';

          // Act
          const { description } = configOption;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
