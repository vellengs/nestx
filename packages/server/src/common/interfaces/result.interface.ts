export interface ResultList<T> {
    list: T[];
    count?: number;
    query?: Query;
}

export interface Result {
    ok: boolean
}


export interface Query {
    size: number;
    page: number;
}