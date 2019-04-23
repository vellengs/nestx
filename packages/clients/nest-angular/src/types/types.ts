import { SFSchema } from '@delon/form';
import { STColumn } from '@delon/abc';

export class Appearance {
    columnSets: ColumnSets;
    formSets: FormSets;
}

export interface ColumnSets {
    default: STColumn[];
    [key: string]: STColumn[];
}

export interface FormSets {
    default: SFSchema;
    query?: SFSchema;
    add?: SFSchema;
    edit?: SFSchema;
    [key: string]: SFSchema;
}

export interface BasePage {
    load(): void;
    reload(): void;
}

export interface BaseTable extends BasePage {
    domain: string;
    columnSets: {
        [key: string]: STColumn[]
    };
    queryParams: {
        [key: string]: any
    };
    total: number;
}

export interface CurdPage extends BaseTable {
    add(): void;
    edit(entry: any): void;
    remove(entry: any): void;
    removeChecked(): void;
    formSets: FormSets;
}

export interface TreeData {
    nodes: Array<any>;
    expandKeys: Array<string>;
    defaultCheckItems: Array<string>;
}

export interface TransferItem {
    id: string;
    name: string;
    desc: string;
}
