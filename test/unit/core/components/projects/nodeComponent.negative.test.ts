import { nodeComponent } from '@app/core/components/projects';

describe('core', () => {
  describe('components', () => {
    describe('projects', () => {
      describe('nodeComponent', () => {
        describe('negative', () => {
          test.each([['requires'], ['scripts']])("prop '%s' should be undefined", (propName) => {
            expect(nodeComponent[propName]).toBeUndefined();
          });
        });
      });
    });
  });
});
