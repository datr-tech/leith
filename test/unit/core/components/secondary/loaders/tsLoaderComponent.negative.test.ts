import { tsLoaderComponent } from '../../../../../../src/core/components/secondary/loaders';

describe('core', () => {
  describe('components', () => {
    describe('secondary', () => {
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
});
