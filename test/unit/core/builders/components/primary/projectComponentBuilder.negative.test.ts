import { projectComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('projectComponentBuilder', () => {
          describe('negative', () => {
            test.each([[''], ['projects'], ['projects/']])("type '%s' should return undefined", (type) => {
              expect(projectComponentBuilder({ type })).toBeUndefined();
            });
          });
        });
      });
    });
  });
});
