import { jestTypescriptComponent } from '@app/core/components/testFrameworks';

describe('core', () => {
  describe('components', () => {
    describe('testFrameworks', () => {
      describe('jestTypescriptComponent', () => {
        describe('negative', () => {
          test.each([['actions'], ['scripts']])("prop '%s' should be undefined", (propName) => {
            expect(jestTypescriptComponent[propName]).toBeUndefined();
          });
        });
      });
    });
  });
});
