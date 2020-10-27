import { LoginHeaders } from "./auth.rest";

export interface ILoginHeaders {
  accessToken: string | null;
  uid: string | null;
  client: string | null;
}

export interface ILoginDto {
  email: string | undefined;
  password: string | undefined;
}

export interface IValidateDto {
  accessToken: string | undefined;
  uid: string | undefined;
  client: string | undefined;
}

export interface IAuthApi {
  postLogin(params: ILoginDto): Promise<LoginHeaders> | Error;
}
