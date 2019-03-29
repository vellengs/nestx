export interface JwtPayload {
  account: string;
}

export interface Token {
  expiresIn: number;
  accessToken: string;
}
