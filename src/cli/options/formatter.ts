import { Option } from 'commander';
import { FormatterEnum } from '@app/config/enums';

export const formatter = new Option('-f, --formatter <formatter>', "The new project's formatter. Defaults to PRETTIER.")
  .choices([FormatterEnum.PRETTIER])
  .default(FormatterEnum.PRETTIER);
