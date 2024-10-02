import { nodeComponent } from '@app/core/components/primary/projects';

describe('core', () => {
  describe('components', () => {
    describe('primary', () => {
      describe('projects', () => {
        describe('nodeComponent', () => {
          describe('positive', () => {
            test("the value of the 'name' prop should be 'projects/node'", () => {
              // Arrange
              const nameExpected = 'projects/node';

              // Act
              const nameFound = nodeComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
            test("the value of the 'dependencies' prop should be the expected array", () => {
              // Arrange
              const dependenciesExpected = ['@types/node'];

              // Act
              const dependenciesFound = nodeComponent.dependencies;

              // Assert
              expect(dependenciesFound).toEqual(dependenciesExpected);
            });
            test("the value of the 'actions' prop should be the expected object", () => {
              // Arrange
              const actionsExpected = {
                files: {
                  write: [
                    {
                      'projects/readme.hbs': './README.md',
                      'projects/npmIgnore.hbs': './.npmignore',
                      'projects/packageJson.hbs': './package.json',
                    },
                  ],
                },
              };

              // Act
              const actionsFound = nodeComponent.actions;

              // Assert
              expect(actionsFound).toEqual(actionsExpected);
            });
          });
        });
      });
    });
  });
});
