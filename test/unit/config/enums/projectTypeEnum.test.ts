import { ProjectTypeEnum } from '@app/config/enums';

describe('config', () => {
  describe('enums', () => {
    describe('ProjectTypeEnum', () => {
      test('NODE', () => {
        const valueExpected = 'NODE';
        expect(ProjectTypeEnum.NODE).toBe(valueExpected);
      });
    });
  });
});
