import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loginer, setLoginer] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const upDateUser = (upDateData) => {
    return updateProfile(auth.currentUser, upDateData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // console.log(loginer, loading);
  useEffect(() => {
    const unSubscride = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setLoginer(currentUser);
      return () => {
        unSubscride();
      };
    });
  }, []);

  const authData = {
    loginer,
    setLoginer,
    createUser,
    logOut,
    login,
    loading,
    setLoading,
    upDateUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
