import { prettierEslintComponent } from '../../../../../../src/core/components/secondary/formatters';

describe('core', () => {
  describe('components', () => {
    describe('secondary', () => {
      describe('formatters', () => {
        describe('prettierEslintComponent', () => {
          test("the value of the 'name' prop should be 'formatters/prettier/eslint'", () => {
            // Arrange
            const nameExpected = 'formatters/prettier/eslint';

            // Act
            const nameFound = prettierEslintComponent.name;

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
          test("the value of the 'dependencies' prop should be the expected array", () => {
            // Arrange
            const dependenciesExpected = ['eslint-config-prettier', 'eslint-plugin-prettier', 'prettier'];

            // Act
            const dependenciesFound = prettierEslintComponent.dependencies;

            // Assert
            expect(dependenciesFound).toEqual(dependenciesExpected);
          });
          test("the value of the 'requires' prop should be ['linters/eslint']", () => {
            // Arrange
            const requiresExpected = ['linters/eslint'];

            // Act
            const requiresFound = prettierEslintComponent.requires;

            // Assert
            expect(requiresFound).toEqual(requiresExpected);
          });
          test("the value of the 'scripts' prop should be the expected object", () => {
            // Arrange
            const scriptsExpected = {
              'format:base': "npx prettier --config ./.prettierrc './src/**/*.ts' './test/**/*.ts'",
              'format:check': 'npm run format:base -- --check',
              'format:write': 'npm run format:base -- --write',
              format: 'npm run format:write',
            };

            // Act
            const scriptsFound = prettierEslintComponent.scripts;

            // Assert
            expect(scriptsFound).toEqual(scriptsExpected);
          });
          test("the value of the 'actions' prop should be the expected object", () => {
            // Arrange
            const actionsExpected = {
              files: {
                write: [
                  {
                    'formatters/prettierEslint.hbs': './.prettierrc',
                  },
                ],
              },
            };

            // Act
            const actionsFound = prettierEslintComponent.actions;

            // Assert
            expect(actionsFound).toEqual(actionsExpected);
          });
        });
      });
    });
  });
});
