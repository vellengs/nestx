export enum HttpStatusTypes {
  Error = 'error',
  Success = 'success',
}

export type ErrorMessage = string;
export type TExceptionOption =
  | ErrorMessage
  | {
      message: ErrorMessage;
      error?: any;
    };

export interface IHttpResponseBase {
  status: HttpStatusTypes;
  message: ErrorMessage;
}

export type THttpErrorResponse = IHttpResponseBase & {
  error: any;
  debug?: string;
};
