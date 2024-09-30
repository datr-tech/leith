import { Option } from 'commander';
import { ProjectEnum } from '@app/config/enums';

export const projectOption = new Option(
  '-p, --project <project>',
  "The new project's type. Defaults to NODE.",
)
  .choices([ProjectEnum.NODE])
  .default(ProjectEnum.NODE);
