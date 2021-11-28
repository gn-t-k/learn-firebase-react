import { onAuthStateChanged } from "libs/firebase/auth/on-auth-state-changed";
import { auth as firebaseAuth } from "libs/firebase/auth/auth";
import { useEffect } from "react";
import { dispatchActionByAuthState } from "libs/firebase/auth/dispatch-action-by-auth-state";
import { useAuthReducer } from "./use-auth-reducer";

/**
 * - ログイン状態が変化したときにactionをdispatchするよう登録
 * - ログイン状態を返す
 */
export const useAuth = () => {
  const [auth, { dispatchLoggedInAction, dispatchLoggedOutAction }] =
    useAuthReducer();

  useEffect(() => {
    const dispatchAction = dispatchActionByAuthState({
      dispatchLoggedInAction,
      dispatchLoggedOutAction,
    });
    const unsubscribe = onAuthStateChanged(firebaseAuth, dispatchAction);

    return unsubscribe;
  }, [dispatchLoggedInAction, dispatchLoggedOutAction]);

  return auth;
};
