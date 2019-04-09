export interface KeyValue {
    label: string;
    value: string;
}

export interface TreeNode {
    id: string;
    title: string;
    parent: string;
}

export class SelectorItem {
    id: string;
    name: string;
    desc: string;
}