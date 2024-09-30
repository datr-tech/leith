import { nameValidator } from '@app/cli/validators';

describe('cli', () => {
  describe('validators', () => {
    describe('nameValidator', () => {
      describe('positive: should return the input', () => {
        test('when the input is a valid name', () => {
          // Arrange
          const name = 'TEST';

          // Act
          const found = nameValidator(name);

          // Assert
          expect(found).toEqual(name);
        });
      });
    });
  });
});
