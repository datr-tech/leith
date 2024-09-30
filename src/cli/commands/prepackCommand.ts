import { Command } from 'commander';
import { prepackHandler } from '@app/cli/handlers';
import { nameArgument } from '@app/cli/arguments';
import { bundlerOption, configOption, formatterOption, linterOption, projectOption } from '@app/cli/options';
import { CONSTS_COMMAND_PREPACK_DESCRIPTION, CONSTS_COMMAND_PREPACK_NAME } from '@app/config/consts';

export const prepackCommand = new Command(CONSTS_COMMAND_PREPACK_NAME);

prepackCommand
  .description(CONSTS_COMMAND_PREPACK_DESCRIPTION)
  .addArgument(nameArgument)
  .addOption(bundlerOption.makeOptionMandatory(false))
  .addOption(configOption.makeOptionMandatory(false))
  .addOption(formatterOption.makeOptionMandatory(false))
  .addOption(linterOption.makeOptionMandatory(false))
  .addOption(projectOption.makeOptionMandatory(false))
  .action((name, options) => prepackHandler({ name, options }));
