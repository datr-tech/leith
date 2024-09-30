import { Option } from 'commander';
import { pathValidator } from '@app/cli/validators';

export const configOption = new Option('-c, --config <path>', 'The path to the config file.')
  .default('')
  .argParser(pathValidator);
