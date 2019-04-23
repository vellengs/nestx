export class CreateCommentDto {

}

export class EditCommentDto {
    id: string;
}

export class CommentResponse {

}

export declare interface PaginateComment {
    error?: Error;
    list: CommentResponse[];
    total: number;
}