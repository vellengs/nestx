export class CreateCategoryDto {
    name: string;
    slug: string;
    order: number;
    parent: string;
    paths: string[];
    description: string;
}

export class EditCategoryDto {
    id: string;
    name: string;
    slug: string;
    order: number;
    parent: string;
    paths: string[];
    description: string;
}

export class CategoryRes {
    id: string;
    name: string;
    slug: string;
    order: number;
    parent: string;
    paths: string[];
    description: string;
}

export declare interface PaginateCategory {
    error?: Error;
    list: CategoryRes[];
    total: number;
}

export const CategoryResponseFields = [
    'id',
    'name',
    'slug',
    'order',
    'parent',
    'paths',
    'description'
];
