import { gitComponent } from '../../../../../../src/core/components/secondary/svc';

describe('core', () => {
  describe('components', () => {
    describe('secondary', () => {
      describe('svc', () => {
        describe('gitComponent', () => {
          describe('negative', () => {
            test.each([['dependencies'], ['requires'], ['scripts']])("prop '%s' should be undefined", (propName) => {
              expect(gitComponent[propName]).toBeUndefined();
            });
          });
        });
      });
    });
  });
});
