import { nodeComponent } from '@app/core/components/primary/projects';

describe('core', () => {
  describe('components', () => {
    describe('primary', () => {
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
});
