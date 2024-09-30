import { nameArgument } from '@app/cli/arguments';

describe('cli', () => {
  describe('arguments', () => {
    describe('nameArgument', () => {
      describe('required', () => {
        test('should be true', () => {
          // Arrange
          const expected = true;

          // Act
          const { required } = nameArgument;

          // Assert
          expect(required).toEqual(expected);
        });
      });
    });
  });
});
