import { pathValidator } from '@app/cli/validators';

describe('cli', () => {
  describe('validators', () => {
    describe('pathValidator', () => {
      describe('positive: should return the input', () => {
        test('when the input is a valid path', () => {
          // Arrange
          const filePathExpected = `${global.JEST_APP_MOCKS_DIR}/files/valid/package.json`;

          // Act
          const filePathFound = pathValidator(filePathExpected);

          // Assert
          expect(filePathFound).toEqual(filePathExpected);
        });
      });
    });
  });
});
