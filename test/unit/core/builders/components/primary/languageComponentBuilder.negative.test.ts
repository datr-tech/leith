import { languageComponentBuilder } from '@app/core/builders/components/primary';

describe('core', () => {
  describe('builders', () => {
    describe('components', () => {
      describe('primary', () => {
        describe('languageComponentBuilder', () => {
          describe('negative', () => {
            test.each([[''], ['languages'], ['languages/'], ['languages/node']])(
              "type '%s' should return undefined",
              (type) => {
                expect(languageComponentBuilder({ type })).toBeUndefined();
              },
            );
          });
        });
      });
    });
  });
});
