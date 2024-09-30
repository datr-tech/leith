export interface IComponent {
  name: string;
  actions?: object;
  children?: string[];
  config?: string[];
  dependencies?: string[];
  parents?: string[];
  path?: string;
  requires?: string[];
  scripts?: object;
}
