import { Command } from 'commander';
import { scaffoldHandler } from '@app/cli/handlers';
import { nameArgument } from '@app/cli/arguments';
import {
  bundler,
  formatter,
  linter,
  project
} from '@app/cli/options';
import {
  CONSTS_COMMAND_SCAFFOLD_DESCRIPTION,
  CONSTS_COMMAND_SCAFFOLD_NAME,
} from '@app/config/consts';

export const scaffoldCommand = new Command(CONSTS_COMMAND_SCAFFOLD_NAME);

scaffoldCommand
  .description(CONSTS_COMMAND_SCAFFOLD_DESCRIPTION)
  .addArgument(nameArgument)
  .addOption(bundler.makeOptionMandatory(false))
  .addOption(formatter.makeOptionMandatory(false))
  .addOption(linter.makeOptionMandatory(false))
  .addOption(project.makeOptionMandatory(false))
  .action((name, options) => scaffoldHandler({ name, options }));
