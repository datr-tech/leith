import { CONSTS_COMMAND_PREPACK_DESCRIPTION, CONSTS_COMMAND_PREPACK_NAME } from '@app/config/consts';

describe('config', () => {
  describe('consts', () => {
    describe('commands', () => {
      test("'CONSTS_COMMAND_PREPACK_DESCRIPTION' should be an expected", () => {
        const descriptionExpected = 'Pre-pack a JavaScript, a Typescript or a related projects';
        expect(CONSTS_COMMAND_PREPACK_DESCRIPTION).toBe(descriptionExpected);
      });
      test("'CONSTS_COMMAND_PREPACK_NAME' should be 'prepack'", () => {
        expect(CONSTS_COMMAND_PREPACK_NAME).toBe('prepack');
      });
    });
  });
});
