import { SetMetadata } from '@nestjs/common';

export interface Options {
    resource?: string;
    action?: 'create' | 'read' | 'update' | 'delete';
    possession?: 'own' | 'any';
}

export const Permission = (...items: Options[]) =>
  SetMetadata('permissions', items);
