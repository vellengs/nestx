export class CreatePageDto {
    name: string;
    title: string;
    description: string;
    sort: number;
    disable: boolean;
    meta: string;
    publish: string;
    content: string;
    template: string;
}

export class EditPageDto {
    id: string;
    name: string;
    title: string;
    description: string;
    sort: number;
    disable: boolean;
    publish: string;
    meta: string;
    content: string;
    template: string;
}

export class PageRes {
    id: string;
    name: string;
    title: string;
    description: string;
    sort: number;
    publish: string;
    disable: boolean;
    meta: string;
    content: string;
    template: string;
}

export const PageResponseFields = [
    'id',
    'name',
    'title',
    'description',
    'sort',
    'disable',
    'publish',
    'meta',
    'content',
    'template',
];


export declare interface PaginatePage {
    error?: Error;
    list: PageRes[];
    total: number;
}