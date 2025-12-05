import { createContext, useContext } from "react";
import type { FirebaseApp } from "firebase/app";
import type { Auth, UserCredential } from "firebase/auth";
import type { Database } from "firebase/database";

export interface IContext {
  auth: Auth;
  app: FirebaseApp;
  db: Database;
  LoginWithEmailPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  RegisterWithEmailPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
}

const Context = createContext<IContext | null>(null);
export const useFireBase = () => useContext(Context);

export default Context;
