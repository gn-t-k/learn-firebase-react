import { onAuthStateChanged } from "libs/firebase/auth/on-auth-state-changed";
import { auth as firebaseAuth } from "libs/firebase/auth/auth";
import { useEffect, useReducer } from "react";
import * as Auth from "stores/auth-store";
import { dispatchActionByAuthState } from "libs/firebase/auth/dispatch-action-by-auth-state";

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

    const dispatchAction = dispatchActionByAuthState({
      dispatchLoggedInAction,
      dispatchLoggedOutAction,
    });
    const unsubscribe = onAuthStateChanged(firebaseAuth, dispatchAction);

    return unsubscribe;
  }, []);

  return auth;
};
