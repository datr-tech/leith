import { CONSTS_PROGRAMME_NAME, CONSTS_PROGRAMME_DESCRIPTION } from '@app/config/consts';

describe('config', () => {
  describe('consts', () => {
    describe('programme', () => {
      test('CONSTS_PROGRAMME_NAME', () => {
        const nameExpected = 'prepack';
        expect(CONSTS_PROGRAMME_NAME).toBe(nameExpected);
      });
      test('CONSTS_PROGRAMME_DESCRIPTION', () => {
        const descriptionExpected = 'A CLI for pre-packing JavaScript, Typescript and related projects';
        expect(CONSTS_PROGRAMME_DESCRIPTION).toBe(descriptionExpected);
      });
    });
  });
});
