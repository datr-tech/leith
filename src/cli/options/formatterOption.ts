import { Option } from 'commander';
import { FormatterTypeEnum } from '@app/config/enums';

export const formatterOption = new Option(
  '-f, --formatter <formatter>',
  "The new project's formatter. Defaults to PRETTIER.",
)
  .choices([FormatterTypeEnum.PRETTIER])
  .default(FormatterTypeEnum.PRETTIER);
