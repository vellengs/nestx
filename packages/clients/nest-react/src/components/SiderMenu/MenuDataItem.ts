export interface MenuDataItem<R extends boolean = false> {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
  routes?: R extends true ? MenuDataItem<R>[] : never;
  [key: string]: any;
}
