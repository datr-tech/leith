import { nameArgument } from '@app/cli/arguments';

describe('cli', () => {
  describe('arguments', () => {
    describe('nameArgument', () => {
      describe('name', () => {
        test("should be 'name'", () => {
          // Arrange
          const expected = 'name';

          // Act
          const name = nameArgument.name();

          // Assert
          expect(name).toEqual(expected);
        });
      });
    });
  });
});
