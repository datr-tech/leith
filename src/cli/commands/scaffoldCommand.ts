import { Command } from 'commander';
import { scaffoldHandler } from '@app/cli/handlers';
import { nameArgument } from '@app/cli/arguments';
import {
  bundlerOption,
  formatterOption,
  linterOption,
  projectOption,
} from '@app/cli/options';
import {
  CONSTS_COMMAND_SCAFFOLD_DESCRIPTION,
  CONSTS_COMMAND_SCAFFOLD_NAME,
} from '@app/config/consts';

export const scaffoldCommand = new Command(CONSTS_COMMAND_SCAFFOLD_NAME);

scaffoldCommand
  .description(CONSTS_COMMAND_SCAFFOLD_DESCRIPTION)
  .addArgument(nameArgument)
  .addOption(bundlerOption.makeOptionMandatory(false))
  .addOption(formatterOption.makeOptionMandatory(false))
  .addOption(linterOption.makeOptionMandatory(false))
  .addOption(projectOption.makeOptionMandatory(false))
  .action((name, options) => scaffoldHandler({ name, options }));
