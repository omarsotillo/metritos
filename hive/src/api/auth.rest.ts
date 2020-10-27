import { IAuthApi, ILoginDto, ILoginHeaders } from "./auth.interface";

export class LoginHeaders implements ILoginHeaders {
  accessToken: string | null;
  uid: string | null;
  client: string | null;

  constructor(nativeHeaders: Headers) {
    this.accessToken = nativeHeaders.get("Access-Token");
    this.uid = nativeHeaders.get("Uid");
    this.client = nativeHeaders.get("Client");
  }
}

export default class AuthApi implements IAuthApi {
  public async postLogin(params: ILoginDto) {
    const response = await fetch(process.env.REACT_APP_BACKEND_HOST + "/api/auth/sign_in", {
      method: "POST",
      body: JSON.stringify({
        email: params.email,
        password: params.password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // TODO: Better error handling
    if (response.ok) {
      const headers = await response.headers;
      return new LoginHeaders(headers);
    } else {
      const errors = await response.json();
      throw new Error(errors.errors[0]);
    }
  }

  // public async validateToken(params: IValidateDto) {
  //   const response = await fetch(process.env.REACT_APP_BACKEND_HOST + "/api/auth/sign_in", {
  //     method: "GET",
  //     body: JSON.stringify({}),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Uid: params.uid,
  //       client: params.client,
  //       access_token: params.accessToken,
  //     },
  //   });

  //   // TODO: Better error handling
  //   if (response.ok) {
  //     return true;
  //   } else {
  //     throw new Error("invalid token");
  //   }
  // }
}
