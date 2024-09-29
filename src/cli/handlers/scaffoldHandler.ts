import { logger } from '@app/utils';

export const scaffoldHandler = ({ ...args }) => {
  const name = args?.path;
  const options = args?.options;
  logger.info({ name, options });
};
