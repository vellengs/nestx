export class CreateWidgetDto {
    name: string;
    title: string;
    params: any;
    type: string;
}

export class EditWidgetDto {
    id: string;
    name: string;
    title: string;
    params: any;
    type: string;
}

export class WidgetResponse {
    id: string;
    name: string;
    title: string;
    params: any;
    type: string;
}

export const WidgetResponseFields = [
    'id',
    'name',
    'title',
    'params',
    'type',
];

export declare interface PaginateWidget {
    error?: Error;
    list: WidgetResponse[];
    total: number;
}