import { pathValidator } from '@app/cli/validators';

const packageJsonDir = global.JEST_APP_MOCKS_DIR;

describe('cli', () => {
  describe('validators', () => {
    describe('pathValidator', () => {
      describe('negative: should throw an error', () => {
        test("when the input is ''", () => {
          // Arrange
          const dir = '';
          const expected = 'path is empty';

          // Act
          const handler = () => {
            pathValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
        test("when the input is ' '", () => {
          // Arrange
          const dir = ' ';
          const expected = 'path is empty';

          // Act
          const handler = () => {
            pathValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
        test('when the input is a non-empty, invalid string', () => {
          // Arrange
          const dir = 'abc';
          const expected = 'path does not exist';

          // Act
          const handler = () => {
            pathValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
        test('when the input represents a dir', () => {
          // Arrange
          const dir = packageJsonDir;
          const expected = "'path' is not a valid file";

          // Act
          const handler = () => {
            pathValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
      });
    });
  });
});
