import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import Context from "./fireContext";
import type { ReactNode } from "react";
import type { UserCredential } from "firebase/auth";

interface ContextProviderProps {
  children: ReactNode;
}

const firebaseConfig = {
  apiKey: "AIzaSyAc9lVO3umgdmRnHJIBOvsbXCyYiJiGQPc",
  authDomain: "transiction-engine.firebaseapp.com",
  databaseURL: "https://transiction-engine-default-rtdb.firebaseio.com",
  projectId: "transiction-engine",
  storageBucket: "transiction-engine.firebasestorage.app",
  messagingSenderId: "290460372534",
  appId: "1:290460372534:web:8a394834f503bd04929297",
};
const app = initializeApp(firebaseConfig);
const LoginWithEmailPassword = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};
const RegisterWithEmailPassword = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};
function ContextProvider({ children }: ContextProviderProps) {
  return (
    <Context.Provider
      value={{
        auth,
        app,
        LoginWithEmailPassword,
        RegisterWithEmailPassword,
        db,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
