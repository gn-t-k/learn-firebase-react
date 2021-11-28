import { Dispatcher } from "components/function/auth-context/hooks/use-auth-reducer";
import { User } from "firebase/auth";

export const dispatchActionByAuthState =
  ({ dispatchLoggedInAction, dispatchLoggedOutAction }: Dispatcher) =>
  async (user: User | null) => {
    if (user === null) {
      dispatchLoggedOutAction();
    } else {
      const clientID = user.uid;
      const token = await user.getIdToken();

      dispatchLoggedInAction({ clientID, token });
    }
  };
