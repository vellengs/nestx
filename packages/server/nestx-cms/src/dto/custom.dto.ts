
export class CreateCustomDto {
    name: string;
    title: string;
    keyword: string;
    category: string;
    description: string;
    author: string;
    sort: number;
    disable: boolean;
    meta: string;
    content: string;
    template: string;
    type: string;
    [key: string]: any;
}

export class EditCustomDto {
    id: string;
    name: string;
    title: string;
    keyword: string;
    category: string;
    description: string;
    author: string;
    sort: number;
    disable: boolean;
    meta: string;
    content: string;
    template: string;
    type: string;
    [key: string]: any;
}

export class CustomResponse {
    id: string;
    name: string;
    title: string;
    category: string;
    description: string;
    author: string;
    sort: number;
    disable: boolean;
    meta: string;
    content: string;
    template: string;
    type: string;
    [key: string]: any;
}

export declare interface PaginateCustom {
    error?: Error;
    list: CustomResponse[];
    total: number;
}

export const CustomResponseFields = [
    'id',
    'name',
    'title',
    'category',
    'description',
    'author',
    'sort',
    'disable',
    'meta',
    'content',
    'template',
    'type',
];
