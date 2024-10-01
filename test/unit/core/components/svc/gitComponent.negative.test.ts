import { gitComponent } from '@app/core/components/svc';

describe('core', () => {
  describe('components', () => {
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
