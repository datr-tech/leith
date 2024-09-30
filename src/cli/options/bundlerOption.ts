import { Option } from 'commander';
import { BundlerTypeEnum } from '@app/config/enums';

export const bundlerOption = new Option('-b, --bundler <bundler>', "The new project's bundler. Defaults to WEBPACK.")
  .choices([BundlerTypeEnum.WEBPACK])
  .default(BundlerTypeEnum.WEBPACK);
