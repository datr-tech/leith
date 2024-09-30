import { formatterOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('formatterOption', () => {
      describe('choices', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'PRETTIER';

          // Act
          const { argChoices } = formatterOption;
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
