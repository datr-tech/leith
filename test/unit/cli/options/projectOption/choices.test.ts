import { projectOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('projectOption', () => {
      describe('choices', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'NODE';

          // Act
          const { argChoices } = projectOption;
          const firstChoice = typeof argChoices !== 'undefined' && argChoices.length > 0 ? argChoices[0] : '';

          // Assert
          expect(firstChoice).toEqual(expected);
        });
      });
    });
  });
});
