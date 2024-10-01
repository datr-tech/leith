import { gitComponent } from '@app/core/components/svc';

describe('core', () => {
  describe('components', () => {
    describe('svc', () => {
      describe('gitComponent', () => {
        describe('positive', () => {
          test("the value of the 'name' prop should be 'svc/node'", () => {
            // Arrange
            const nameExpected = 'svc/git';

            // Act
            const nameFound = gitComponent.name;

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
          test("the value of the 'actions' prop should be the expected object", () => {
            // Arrange
            const actionsExpected = {
              files: {
                write: [
                  {
                    'svc/gitIgnore.hbs': './.gitignore',
                  },
                ],
              },
              commands: ['git init'],
            };

            // Act
            const actionsFound = gitComponent.actions;

            // Assert
            expect(actionsFound).toEqual(actionsExpected);
          });
        });
      });
    });
  });
});
