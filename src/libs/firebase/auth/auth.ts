import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { app } from "../app";

const getFirebaseAuth = (firebaseApp: FirebaseApp) => getAuth(firebaseApp);

export const auth = getFirebaseAuth(app);
