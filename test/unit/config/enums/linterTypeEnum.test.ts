import { LinterTypeEnum } from '@app/config/enums';

describe('config', () => {
  describe('enums', () => {
    describe('linterTypeEnum', () => {
      test('ESLINT', () => {
        const valueExpected = 'ESLINT';
        expect(LinterTypeEnum.ESLINT).toBe(valueExpected);
      });
    });
  });
});
