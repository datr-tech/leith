import { Option } from 'commander';
import { BundlerEnum } from '@app/config/enums';

export const bundler = new Option('-b, --bundler <bundler>', "The new project's bundler. Defaults to WEBPACK.")
  .choices([BundlerEnum.WEBPACK])
  .default(BundlerEnum.WEBPACK);
