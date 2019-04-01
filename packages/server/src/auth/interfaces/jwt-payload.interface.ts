export interface JwtPayload {
  account: string;
}

export interface AccessToken {
  expiresIn: number;
  accessToken: string;
}
