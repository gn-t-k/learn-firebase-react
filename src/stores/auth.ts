/**
 * State
 */
export type LoginStatus = "loggedIn" | "loggedOut" | "unknown";

export type State = {
  clientID: string | null;
  token: string | null;
  loginStatus: LoginStatus;
};

export const initialState: State = {
  clientID: null,
  token: null,
  loginStatus: "unknown",
};

/**
 * Actions
 */
const loggedIn = "auth/loggedIn" as const;
const loggedOut = "auth/loggedOut" as const;

export type LoggedInActionPayload = { clientID: string; token: string };

const loggedInAction = (payload: LoggedInActionPayload) => ({
  type: loggedIn,
  payload,
});

const loggedOutAction = () => ({
  type: loggedOut,
});

export const actions = {
  loggedInAction,
  loggedOutAction,
};

export type ActionType =
  | ReturnType<typeof loggedInAction>
  | ReturnType<typeof loggedOutAction>;

/**
 * Reducer
 */
export const reducer = (state: State, action: ActionType): State => {
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
