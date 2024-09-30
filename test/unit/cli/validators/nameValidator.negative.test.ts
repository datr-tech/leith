import { nameValidator } from '@app/cli/validators';

describe('cli', () => {
  describe('validators', () => {
    describe('dirValidator', () => {
      describe('negative: should throw an error', () => {
        test("when the input is ''", () => {
          // Arrange
          const name = '';
          const expected = "'name' should not be empty";

          // Act
          const handler = () => {
            nameValidator(name);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
        test("when the input is ' '", () => {
          // Arrange
          const name = ' ';
          const expected = "'name' should not be empty";

          // Act
          const handler = () => {
            nameValidator(name);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
      });
    });
  });
});
