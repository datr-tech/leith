import { CONSTS_PATH_APP_ROOT, CONSTS_PATH_SRC_DIR } from '@app/config/consts';

describe('config', () => {
  describe('consts', () => {
    describe('paths', () => {
      test('CONSTS_PATH_APP_ROOT', () => {
        expect(CONSTS_PATH_APP_ROOT).toBe(process.env.PWD);
      });
      test('CONSTS_PATH_SRC_DIR', () => {
        expect(CONSTS_PATH_SRC_DIR).toBe(`${process.env.PWD}/src`);
      });
    });
  });
});
