export interface Appearance {
    columnSets: any;
    formSets: any;
}

export enum SchemaTypes {
    array = 'array',
    string = 'string',
    boolean = 'boolean',
    number = 'number',
    object = 'object',
}

export enum WidgetTypes {
    array = 'array',
    autocomplete = 'autocomplete',
    boolean = 'boolean',
    checkbox = 'checkbox',
    cascader = 'cascader',
    date = 'date',
    mention = 'mention',
    number = 'number',
    object = 'object',
    radio = 'radio',
    range = 'range',
    rate = 'rate',
    select = 'select',
    search = 'search',
    string = 'string',
    tag = 'tag',
    text = 'text',
    textarea = 'textarea',
    time = 'time',
    transfer = 'transfer',
    upload = 'upload',
    tinymce = 'tinymce',
    ueditor = 'ueditor',
    umeditor = 'umeditor',
    listBox = 'listBox',
    dict = 'dict',
    choices = 'choices',
    image = 'image',
    avatar = 'avatar',
    tabs = 'tabs',
    treeSelect = 'tree-select',
    markdown = 'markdown',
}

export interface ColumnSets {
    [key: string]: ColumnDefine[]
}

export interface FormSets {
    [key: string]: any // TODO 
}

export interface ColumnDefine {
    type?:
    | 'checkbox'
    | 'link'
    | 'radio'
    | 'img'
    | 'currency'
    | 'number'
    | 'date'
    | 'yn';
    title: string;
    i18n?: string;
    index?: string | string[];
    render?: string;
    renderTitle?: string;
    width?: string;
    sort?: 'ascend' | 'descend';
    sorter?: Function;
    sortKey?: string;
    sortReName?: { ascend?: string; descend?: string };
    filter?: Function;
    filtered?: boolean;
    filterIcon?: string;
    filterConfirmText?: string;
    filterClearText?: string;
    filterMultiple?: boolean;
    filterKey?: string;
    format?: Function;
    className?: string;
    colSpan?: number;
    numberDigits?: string;
    dateFormat?: string;
    ynTruth?: any;
    ynYes?: string;
    ynNo?: string;
    exported?: boolean;
    acl?: any;
    default?: string;
    fixed?: 'left' | 'right';
    [key: string]: any;
}

export interface FormDefine {
    title: string;
    type?: string;
    required?: string[];
    properties: {
        [key: string]: FormDefine
    };
    [key: string]: any;
}

export declare class Paginate {
    page: number;
    size: number;
    sort: string;
}

export declare class Error {
    code?: string;
    message?: string;
    [key: string]: any;
}