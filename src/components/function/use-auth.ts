import {
  selectActionByAuthState,
  onAuthStateChanged,
} from "libs/firebase/auth/on-auth-state-changed";
import { useEffect, useReducer } from "react";
import * as Auth from "stores/auth-store";

/**
 * - ログイン状態が変化したときにactionをdispatchするよう登録
 * - ログイン状態を返す
 */
export const useAuth = () => {
  const [auth, dispatch] = useReducer(Auth.reducer, Auth.initialState);

  useEffect(() => {
    const dispatchLoggedInAction = (payload: Auth.LoggedInActionPayload) =>
      dispatch(Auth.actions.loggedInAction(payload));
    const dispatchLoggedOutAction = () =>
      dispatch(Auth.actions.loggedOutAction());

    const dispatchAction = selectActionByAuthState({
      dispatchLoggedInAction,
      dispatchLoggedOutAction,
    });
    const unsubscribe = onAuthStateChanged(dispatchAction);

    return unsubscribe;
  }, []);

  return auth;
};
