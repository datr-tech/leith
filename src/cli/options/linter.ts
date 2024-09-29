import { Option } from 'commander';
import { LinterEnum } from '@app/config/enums';

export const linter = new Option('-l, --linter <linter>', "The new project's linter. Defaults to ESLINT.")
  .choices([LinterEnum.ESLINT, LinterEnum.UNKNOWN])
  .default(LinterEnum.ESLINT);
