export interface ResultList<T> {
  list: T[];
  count?: number;
  query?: Query;
}

export interface Result {
  ok: boolean;
  message?: string;
}

export interface Query {
  size: number;
  page: number;
}
export interface TreeNode {
  id: string;
  icon?: string;
  type?: string;
  title: string;
  parent: string;
}
