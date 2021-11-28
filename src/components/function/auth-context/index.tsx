import { createContext, ReactNode } from "react";
import { useAuth } from "./hooks/use-auth";
import { initialState, State } from "./hooks/use-auth-reducer";

export const AuthContext = createContext<State>(initialState);

type Props = {
  children: ReactNode;
};
export const AuthContextProvider = ({ children }: Props) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
