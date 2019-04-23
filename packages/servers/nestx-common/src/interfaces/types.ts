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

export interface IUser {
  id: string;
  isAdmin: boolean;
  roles: string[];
  username: string;
  name: string;
}

export interface IAccessManagement {
  canAccess: (
    roles: string[],
    controller: string,
    method: string
  ) => Promise<boolean>;
}

export interface ILoggerService {
  log: (option: {
    ip: string;
    elapsed: number;
    controller: string;
    method: string;
    userId: string;
    username: string;
  }) => Promise<void>;
}
