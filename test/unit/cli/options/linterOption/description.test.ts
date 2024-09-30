import { linterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('linterOption', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected = "The new project's linter. Defaults to ESLINT.";

          // Act
          const { description } = linterOption;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
