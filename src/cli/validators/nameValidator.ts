import { InvalidArgumentError } from 'commander';

export const nameValidator = (name: string) => {
  const isValid = name != null && name.trim().length > 0;

  if (!isValid) {
    throw new InvalidArgumentError("'name' should not be empty");
  }

  return name;
};
