import { Argument } from 'commander';
import { nameValidator } from '@app/cli/validators';

export const nameArgument = new Argument(
  '<name>',
  'the name of the new project',
).argParser(nameValidator);
