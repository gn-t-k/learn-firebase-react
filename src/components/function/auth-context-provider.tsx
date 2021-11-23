import { createContext, Dispatch, ReactNode } from "react";
import * as Auth from "stores/auth";
import { useAuth } from "./use-auth";

export const AuthContext = createContext<Auth.State>(Auth.initialState);

type Props = {
  children: ReactNode;
};
export const AuthContextProvider = ({ children }: Props) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
