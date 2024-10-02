import { FormatterTypeEnum } from '@app/config/enums';

describe('config', () => {
  describe('enums', () => {
    describe('FormatterTypeEnum', () => {
      test('PRETTIER', () => {
        const valueExpected = 'PRETTIER';
        expect(FormatterTypeEnum.PRETTIER).toBe(valueExpected);
      });
    });
  });
});
