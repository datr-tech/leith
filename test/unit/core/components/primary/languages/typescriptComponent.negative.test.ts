import { typescriptComponent } from '@app/core/components/primary/languages';

describe('core', () => {
  describe('components', () => {
    describe('primary', () => {
      describe('languages', () => {
        describe('typescriptComponent', () => {
          describe('negative', () => {
            test.each([['requires'], ['scripts']])("prop '%s' should be undefined", (propName) => {
              expect(typescriptComponent[propName]).toBeUndefined();
            });
          });
        });
      });
    });
  });
});
