import { typescriptComponent } from '@app/core/components/languages';

describe('core', () => {
  describe('components', () => {
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
