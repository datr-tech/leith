import { nameArgument } from '@app/cli/arguments';

describe('cli', () => {
  describe('arguments', () => {
    describe('nameArgument', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'The name of the new projectOption';

          // Act
          const { description } = nameArgument;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
