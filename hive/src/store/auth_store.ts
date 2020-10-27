import create from "zustand";
import { LoginHeaders } from "../api/auth.rest";

export type Set = {
  isAuthenticated: Boolean;
  accessToken: string | undefined | null;
  uid: string | undefined | null;
  client: string | undefined | null;
  authenticate: (params: LoginHeaders) => void;
  logout: () => void;
};

export const useAuthStore = create<Set>(
  (set): Set => ({
    accessToken: getCookie("metritos-access-token"),
    uid: getCookie("metritos-uid"),
    client: getCookie("metritos-client"),

    // TODO: Move this to validate token instead
    isAuthenticated: !!getCookie("metritos-access-token"),

    authenticate: (params) => {
      setCookie("metritos-access-token", params.accessToken);
      setCookie("metritos-uid", params.uid);
      setCookie("metritos-client", params.client);
      set(() => ({
        accessToken: params.accessToken,
        uid: params.uid,
        client: params.client,
        isAuthenticated: true,
      }));
    },
    logout: () => {
      deleteCookie("metritos-access-token");
      deleteCookie("metritos-uid");
      deleteCookie("metritos-client");
    },
  })
);

// TODO: move to helper
export function getCookie(name: string) {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string | null) {
  if (!value) {
    return;
  }
  // TODO: Set secure-samesite-expires
  document.cookie = `${name}=${value}`;
}

export function deleteCookie(name: string) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
