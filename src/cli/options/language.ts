import { Option } from 'commander';
import { LanguageEnum } from '@app/config/enums';

export const language = new Option('-l, --language <language>', "The new project's language. Defaults to TYPESCRIPT.")
  .choices([LanguageEnum.TYPESCRIPT])
  .default(LanguageEnum.TYPESCRIPT);
