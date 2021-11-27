import { User } from "firebase/auth";
import { LoggedInActionPayload } from "stores/auth-store";

type GetObserverProps = {
  dispatchLoggedInAction: (payload: LoggedInActionPayload) => void;
  dispatchLoggedOutAction: () => void;
};
export const dispatchActionByAuthState =
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
