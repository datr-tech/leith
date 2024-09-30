import { Argument } from 'commander';
import { nameValidator } from '@app/cli/validators';

export const nameArgument = new Argument(
  '<name>',
  'The name of the new projectOption',
).argParser(nameValidator);
