import { LanguageTypeEnum } from '@app/config/enums';

describe('config', () => {
  describe('enums', () => {
    describe('languageTypeEnum', () => {
      test('TYPESCRIPT', () => {
        const valueExpected = 'TYPESCRIPT';
        expect(LanguageTypeEnum.TYPESCRIPT).toBe(valueExpected);
      });
    });
  });
});
