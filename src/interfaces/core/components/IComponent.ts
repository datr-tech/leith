export interface IComponent {
  name: string;
  dependencies?: string[];
  requires?: string[];
  scripts?: object;
  actions?: object;
}
