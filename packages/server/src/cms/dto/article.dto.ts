
export class CreateArticleDto {
    name: string;
    title: string;
    keyword: string;
    picture: string;
    category: string;
    description: string;
    author: string;
    sort: number;
    disable: boolean;
    meta: string;
    content: string;
    template: string;
}

export class EditArticleDto {
    id: string;
    name: string;
    picture: string;
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
}

export class ArticleRes {
    id: string;
    name: string;
    title: string;
    picture: string;
    category: string;
    description: string;
    author: string;
    sort: number;
    disable: boolean;
    meta: string;
    content: string;
    template: string;
}

export declare interface PaginateArticle {
    error?: Error;
    list: ArticleRes[];
    total: number;
}

export const ArticleResponseFields = [
    'id',
    'name',
    'picture',
    'title',
    'category',
    'description',
    'author',
    'sort',
    'disable',
    'meta',
    'content',
    'template',
];
