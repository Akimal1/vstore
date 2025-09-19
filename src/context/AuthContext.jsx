import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

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

  // Создание аккаунта
  const createAccount = async (email, password, name, avatar, phone, surName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user, {
        displayName: name + (surName ? ` ${surName}` : ""),
        photoURL: avatar || "",
      });

      // Обновляем контекст с дополнительными полями
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
    } catch (error) {
      console.error("Ошибка при создании аккаунта:", error.message);
      throw error;
    }
  };

  // Регистрация через Google
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

  // Подписка на изменения пользователя
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

  return (
    <authContext.Provider
      value={{ user: state.user, createAccount, signInWithGoogle }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
