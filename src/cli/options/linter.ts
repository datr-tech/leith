import { Option } from 'commander';
import { LinterEnum } from '@app/config/enums';

export const linter = new Option('-L, --linter <linter>', "The new project's linter. Defaults to ESLINT.")
  .choices([LinterEnum.ESLINT])
  .default(LinterEnum.ESLINT);
