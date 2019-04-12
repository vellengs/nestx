export class CreateGroupReq {
  outid?: number;
  name: string;
  icon?: string;
  parent?: string;
  paths?: any[];
  director?: string
  order: number;
  isRegion?: boolean;
  description?: string;
}

export class EditGroupReq {
  id: string;
  outid?: number;
  name: string;
  icon?: string;
  parent?: string;
  paths?: any[];
  director?: string
  order: number;
  isRegion?: boolean;
  description?: string;
}

export class GroupRes {
  id: string;
  outid?: number;
  name: string;
  icon?: string;
  parent?: string;
  paths?: any[];
  director?: string
  order: number;
  isRegion?: boolean;
  description?: string;
}