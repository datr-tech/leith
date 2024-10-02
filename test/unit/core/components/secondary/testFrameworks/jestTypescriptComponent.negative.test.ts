import { jestTypescriptComponent } from '../../../../../../src/core/components/secondary/testFrameworks';

describe('core', () => {
  describe('components', () => {
    describe('secondary', () => {
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
});
