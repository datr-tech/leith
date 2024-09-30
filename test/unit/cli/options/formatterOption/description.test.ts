import { formatterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('formatterOption', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected =
            "The new project's formatter. Defaults to PRETTIER.";

          // Act
          const { description } = formatterOption;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
