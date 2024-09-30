import { Option } from 'commander';
import { LinterTypeEnum } from '@app/config/enums';

export const linterOption = new Option('-l, --linter <linter>', "The new project's linter. Defaults to ESLINT.")
  .choices([LinterTypeEnum.ESLINT, LinterTypeEnum.UNKNOWN])
  .default(LinterTypeEnum.ESLINT);
