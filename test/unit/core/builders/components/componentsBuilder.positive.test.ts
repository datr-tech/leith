import { componentsBuilder } from '@app/core/builders/components';
import { IComponentsBuilderInput } from '@app/interfaces/core/builders/IComponentsBuilderInput';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('componentsBuilder', () => {
        describe('positive', () => {
          test('should return the expected set of components', () => {
            // Arrange
            const options: IComponentsBuilderInput = {
              project: {
                name: 'projects/node',
              },
              language: {
                name: 'languages/typescript',
              },
            };

            // Act
            const components = componentsBuilder(options);
            const numComponents = components.length;

            // Assert
            expect(numComponents).toBeGreaterThan(0);
          });
        });
      });
    });
  });
});
