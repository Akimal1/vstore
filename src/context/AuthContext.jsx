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
import { auth } from "../firebase";
import { setDoc } from "firebase/firestore";

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
        role:
          email === "akimturgunbaewv@gmail.com" && password === "akimali@+$3689"
            ? "admin"
            : "user",
      });
    } catch (error) {
      console.error("Ошибка при создании аккаунта:", error.message);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      dispatch({
        type: "SET_USER",
        payload: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber || "",
        },
      });
    } catch (error) {
      console.error("Ошибка Google входа:", error.message);
    }
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
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch({
          type: "SET_USER",
          payload: {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            phoneNumber: firebaseUser.phoneNumber || "",
          },
        });
      } else {
        dispatch({ type: "SET_USER", payload: null });
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
