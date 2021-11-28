import { useCallback, useReducer } from "react";

export type State =
  | {
      clientID: string;
      token: string;
      loginStatus: "loggedIn";
    }
  | {
      clientID: null;
      token: null;
      loginStatus: "loggedOut" | "unknown";
    };

export const initialState: State = {
  clientID: null,
  token: null,
  loginStatus: "unknown",
};

export type Dispatcher = {
  dispatchLoggedInAction: (payload: LoggedInActionPayload) => void;
  dispatchLoggedOutAction: () => void;
};
type LoggedInActionPayload = { clientID: string; token: string };

export const useAuthReducer = (): [State, Dispatcher] => {
  const loggedIn = "auth/loggedIn" as const;
  const loggedOut = "auth/loggedOut" as const;

  const loggedInAction = (payload: LoggedInActionPayload) => ({
    type: loggedIn,
    payload,
  });
  const loggedOutAction = () => ({
    type: loggedOut,
  });

  const reducer = (
    state: State,
    action:
      | ReturnType<typeof loggedInAction>
      | ReturnType<typeof loggedOutAction>
  ): State => {
    switch (action.type) {
      case loggedIn:
        return {
          ...state,
          clientID: action.payload.clientID,
          token: action.payload.token,
          loginStatus: "loggedIn",
        };
      case loggedOut:
        return {
          ...state,
          clientID: null,
          token: null,
          loginStatus: "loggedOut",
        };
      default:
        return state;
    }
  };

  const [auth, dispatch] = useReducer(reducer, initialState);

  const dispatchLoggedInAction = (payload: LoggedInActionPayload) =>
    dispatch(loggedInAction(payload));
  const dispatchLoggedOutAction = () => dispatch(loggedOutAction());

  return [
    auth,
    {
      dispatchLoggedInAction: useCallback(dispatchLoggedInAction, []),
      dispatchLoggedOutAction: useCallback(dispatchLoggedOutAction, []),
    },
  ];
};
