import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const initialState = { user: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const googleProvider = new GoogleAuthProvider();

  const createAccount = async (
    email,
    password,
    name,
    avatar,
    phone,
    surName
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: name + (surName ? ` ${surName}` : ""),
        photoURL: avatar || "",
      });

      dispatch({
        type: "SET_USER",
        payload: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: phone || "",
          surName: surName || "",
        },
      });

      await setDoc(doc(db, "user-roles", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL || "",
        phoneNumber: phone || "",
        surName: surName || "",
        role: email === "akimturgunbaewv@gmail.com" ? "admin" : "user",
      });
    } catch (error) {
      console.error("Ошибка при создании аккаунта:", error.message);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    await signOut(auth);
  };
  const delteteAccount = async () => {
    await deleteUser(auth.currentUser);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const resetPasword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDb = await getDoc(doc(db, "user-roles", firebaseUser.uid));
        const totalUser = { ...firebaseUser, ...userDb.data() };
        dispatch({
          type: "SET_USER",
          payload: totalUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);
  const values = {
    user: state.user,
    createAccount,
    signInWithGoogle,
    logOut,
    delteteAccount,
    login,
    resetPasword,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
