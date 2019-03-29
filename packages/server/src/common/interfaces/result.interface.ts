export interface ResultList<T> {
    list: T[];
    count?: number;
    query?: Query;
}

export interface Query {
    size: number;
    index: number;
}