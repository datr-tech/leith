import { bundlerOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('bundlerOption', () => {
      describe('choices', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'WEBPACK';

          // Act
          const { argChoices } = bundlerOption;
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
