import { webpackTypescriptComponent } from '../../../../../../src/core/components/secondary/bundlers';

describe('core', () => {
  describe('components', () => {
    describe('secondary', () => {
      describe('bundlers', () => {
        describe('webpackTypescriptComponent', () => {
          test("the value of the 'name' prop should be 'bundlers/webpack/typescript'", () => {
            // Arrange
            const nameExpected = 'bundlers/webpack/typescript';

            // Act
            const nameFound = webpackTypescriptComponent.name;

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
          test("the value of the 'dependencies' prop should be ['languages/typescript', 'loaders/tsLoader']", () => {
            // Arrange
            const dependenciesExpected = ['webpack', 'webpack-cli'];

            // Act
            const dependenciesFound = webpackTypescriptComponent.dependencies;

            // Assert
            expect(dependenciesFound).toEqual(dependenciesExpected);
          });
          test("the value of the 'requires' prop should be ['languages/typescript', 'loaders/tsLoader']", () => {
            // Arrange
            const requiresExpected = ['languages/typescript', 'loaders/tsLoader'];

            // Act
            const requiresFound = webpackTypescriptComponent.requires;

            // Assert
            expect(requiresFound).toEqual(requiresExpected);
          });
          test("the value of the 'scripts' prop should be the expected object", () => {
            // Arrange
            const scriptsExpected = {
              build: 'npx webpack --mode production',
            };

            // Act
            const scriptsFound = webpackTypescriptComponent.scripts;

            // Assert
            expect(scriptsFound).toEqual(scriptsExpected);
          });
          test("the value of the 'actions' prop should be the expected object", () => {
            // Arrange
            const actionsExpected = {
              files: {
                write: [
                  {
                    'bundlers/webpackTypeScript.hbs': 'webpack.config.mjs',
                  },
                ],
              },
            };

            // Act
            const actionsFound = webpackTypescriptComponent.actions;

            // Assert
            expect(actionsFound).toEqual(actionsExpected);
          });
        });
      });
    });
  });
});
