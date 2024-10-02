import { typescriptComponent } from '@app/core/components/primary/languages';

describe('core', () => {
  describe('components', () => {
    describe('primary', () => {
      describe('languages', () => {
        describe('typescriptComponent', () => {
          describe('positive', () => {
            test("the value of the 'name' prop should be 'languages/typescript'", () => {
              // Arrange
              const nameExpected = 'languages/typescript';

              // Act
              const nameFound = typescriptComponent.name;

              // Assert
              expect(nameFound).toEqual(nameExpected);
            });
            test("the value of the 'dependencies' prop should be the expected array", () => {
              // Arrange
              const dependenciesExpected = ['typescript'];

              // Act
              const dependenciesFound = typescriptComponent.dependencies;

              // Assert
              expect(dependenciesFound).toEqual(dependenciesExpected);
            });
            test("the value of the 'actions' prop should be the expected object", () => {
              // Arrange
              const actionsExpected = {
                files: {
                  write: [
                    {
                      'languages/typescript.hbs': './tsconfig.json',
                    },
                  ],
                },
              };

              // Act
              const actionsFound = typescriptComponent.actions;

              // Assert
              expect(actionsFound).toEqual(actionsExpected);
            });
          });
        });
      });
    });
  });
});
