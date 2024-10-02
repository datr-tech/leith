import { eslintTypescriptComponent } from '../../../../../../src/core/components/secondary/linters';

describe('core', () => {
  describe('components', () => {
    describe('secondary', () => {
      describe('linters', () => {
        describe('eslintTypescriptComponent', () => {
          test("the value of the 'name' prop should be 'linters/eslint/typescript'", () => {
            // Arrange
            const nameExpected = 'linters/eslint/typescript';

            // Act
            const nameFound = eslintTypescriptComponent.name;

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
          test("the value of the 'dependencies' prop should be the expected array", () => {
            // Arrange
            const dependenciesExpected = ['@eslint/compat', '@eslint/eslintrc', '@eslint/js', 'typescript-eslint'];

            // Act
            const dependenciesFound = eslintTypescriptComponent.dependencies;

            // Assert
            expect(dependenciesFound).toEqual(dependenciesExpected);
          });
          test("the value of the 'requires' prop should be ['languages/typescript']", () => {
            // Arrange
            const requiresExpected = ['languages/typescript'];

            // Act
            const requiresFound = eslintTypescriptComponent.requires;

            // Assert
            expect(requiresFound).toEqual(requiresExpected);
          });
          test("the value of the 'scripts' prop should be the expected object", () => {
            // Arrange
            const scriptsExpected = {
              'lint:base': 'npx eslint --config ./eslint.config.mjs',
              lint: 'npm run lint:base -- --fix',
            };

            // Act
            const scriptsFound = eslintTypescriptComponent.scripts;

            // Assert
            expect(scriptsFound).toEqual(scriptsExpected);
          });
          test("the value of the 'actions' prop should be the expected object", () => {
            // Arrange
            const actionsExpected = {
              files: {
                write: [
                  {
                    'linters/eslintTypescript.hbs': './eslint.config.mjs',
                  },
                ],
              },
            };

            // Act
            const actionsFound = eslintTypescriptComponent.actions;

            // Assert
            expect(actionsFound).toEqual(actionsExpected);
          });
        });
      });
    });
  });
});
