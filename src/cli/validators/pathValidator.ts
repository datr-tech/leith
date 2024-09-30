import { isFile } from '@app/core/services/fs/helpers';
import { InvalidArgumentError } from 'commander';

export const pathValidator = (path: string) => {
  const isValid = isFile({ path });

  if (!isValid) {
    throw new InvalidArgumentError("'path' is not a valid file");
  }

  return path;
};
