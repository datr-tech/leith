import { linterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('linterOption', () => {
      describe('choices', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'ESLINT';

          // Act
          const { argChoices } = linterOption;
          const firstChoice =
            typeof argChoices !== 'undefined' && argChoices.length > 0
              ? argChoices[0]
              : '';

          // Assert
          expect(firstChoice).toEqual(expected);
        });
      });
    });
  });
});
