import { logger } from '@app/utils';

export const prepackHandler = ({ ...args }) => {
  const name = args?.path;
  const options = args?.options;
  logger.info({ name, options });
};
