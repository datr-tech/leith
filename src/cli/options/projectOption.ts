import { Option } from 'commander';
import { ProjectTypeEnum } from '@app/config/enums';

export const projectOption = new Option('-p, --project <project>', "The new project's type. Defaults to NODE.")
  .choices([ProjectTypeEnum.NODE])
  .default(ProjectTypeEnum.NODE);
