import { InvalidArgumentError } from 'commander';

export const nameValidator = (name: string) => {
  const isValid = name != null && name.trim().length > 0;

  if (!isValid) {
    throw new InvalidArgumentError('dir is not a valid directory');
  }

  return name;
};
