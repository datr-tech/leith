import { tsLoaderComponent } from '@app/core/components/loaders';

describe('core', () => {
  describe('components', () => {
    describe('loaders', () => {
      describe('tsLoaderComponent', () => {
        describe('negative', () => {
          test.each([['actions'], ['scripts']])("prop '%s' should be undefined", (propName) => {
            expect(tsLoaderComponent[propName]).toBeUndefined();
          });
        });
      });
    });
  });
});
