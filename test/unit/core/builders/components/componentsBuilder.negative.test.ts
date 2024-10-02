import { componentsBuilder } from '@app/core/builders/components';
import { IComponentsBuilderInput } from '@app/interfaces/core/builders/IComponentsBuilderInput';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('componentsBuilder', () => {
        describe('negative', () => {
          test('should return an array of undefined components', () => {
            // Arrange
            const numComponentsExpected = 0;
            const options: IComponentsBuilderInput = {
              project: {
                name: 'projects/UNKNOWN',
              },
              language: {
                name: 'languages/UNKNOWN',
              },
            };

            // Act
            const components = componentsBuilder(options);
            const numComponentsFound = components.length;

            // Assert
            expect(numComponentsFound).toEqual(numComponentsExpected);
          });
        });
      });
    });
  });
});
