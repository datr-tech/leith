import { projectOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('projectOption', () => {
      describe('attributeName', () => {
        test("should be 'project'", () => {
          // Arrange
          const expected = 'project';

          // Act
          const attributeName = projectOption.attributeName();

          // Assert
          expect(attributeName).toEqual(expected);
        });
      });
    });
  });
});
