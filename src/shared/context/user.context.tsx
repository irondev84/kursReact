import React, { useContext, useMemo, useState } from "react";
import { getCurrentUser } from "../services/musicAPI";

export interface OAuthToken {
  access_token: string;
  token_type: string;
  expires_in: string;
  state: string;
}

interface UserContext {
  token?: OAuthToken;
  user?: UserProfile;
  login(): void;
  logout(): void;
}

const userContext = React.createContext<UserContext | null>(null);

type Props = {};

const UserContextProvider = (props: React.PropsWithChildren<Props>) => {
  const [token, setToken] = useState<OAuthToken>();
  const [user, setUser] = useState<UserProfile>();

  const login = () => {
    // setUser({ display_name: "Placki" } as any);
    getCurrentUser().then(setUser);
  };
  const logout = () => {
    setUser(undefined);
  };

  const context = useMemo(
    () => ({
      token,
      user,
      login,
      logout,
      // getState()
      // subscribeToStateChangescosmta()
    }),
    [token, user]
  );

  return useMemo(
    () => (
      <userContext.Provider value={context}>
        {props.children}
      </userContext.Provider>
    ),
    []
  );
};

export default UserContextProvider;

export interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export function useUser() {
  const context = useContext(userContext);
  if (!context) throw new Error("Wrap with <UserContextProvider> !");

  return context;
}
