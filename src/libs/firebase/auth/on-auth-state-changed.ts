import { User } from "firebase/auth";
import { auth } from "./auth";
import { LoggedInActionPayload } from "stores/auth";

export const onAuthStateChanged = auth.onAuthStateChanged;

type GetObserverProps = {
  dispatchLoggedInAction: (payload: LoggedInActionPayload) => void;
  dispatchLoggedOutAction: () => void;
};
export const selectActionByAuthState =
  ({ dispatchLoggedInAction, dispatchLoggedOutAction }: GetObserverProps) =>
  async (user: User | null) => {
    if (user === null) {
      dispatchLoggedOutAction();
    } else {
      const clientID = user.uid;
      const token = await user.getIdToken();

      dispatchLoggedInAction({ clientID, token });
    }
  };
