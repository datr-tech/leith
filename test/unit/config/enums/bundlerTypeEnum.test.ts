import { BundlerTypeEnum } from '@app/config/enums';

describe('config', () => {
  describe('enums', () => {
    describe('BundlerTypeEnum', () => {
      test('WEBPACK', () => {
        const valueExpected = 'WEBPACK';
        expect(BundlerTypeEnum.WEBPACK).toBe(valueExpected);
      });
    });
  });
});
