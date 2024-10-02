import {
  CONSTS_UTILS_EMPTY_STRING,
  CONSTS_UTILS_FILE_EXTENSION_JSON,
  CONSTS_UTILS_PERIOD_STRING,
  CONSTS_UTILS_PROP_VALUE_NOT_FOUND,
} from '@app/config/consts';

describe('config', () => {
  describe('consts', () => {
    describe('utils', () => {
      test('CONSTS_UTILS_EMPTY_STRING', () => {
        const valueExpected = '';
        expect(CONSTS_UTILS_EMPTY_STRING).toBe(valueExpected);
      });
      test('CONSTS_UTILS_FILE_EXTENSION_JSON', () => {
        const valueExpected = '.json';
        expect(CONSTS_UTILS_FILE_EXTENSION_JSON).toBe(valueExpected);
      });
      test('CONSTS_UTILS_PERIOD_STRING', () => {
        const valueExpected = '.';
        expect(CONSTS_UTILS_PERIOD_STRING).toBe(valueExpected);
      });
      test('CONSTS_UTILS_PROP_VALUE_NOT_FOUND', () => {
        const valueExpected = 'PROP_VALUE_NOT_FOUND';
        expect(CONSTS_UTILS_PROP_VALUE_NOT_FOUND).toBe(valueExpected);
      });
    });
  });
});
