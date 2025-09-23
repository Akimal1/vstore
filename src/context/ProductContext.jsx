import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../constants/api";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const initialState = {
  products: [],
  oneProduct: {},
  isLoading: false,
  category: "",
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        const newBasket = [...state.basket];
        newBasket.splice(index, 1);
        return { ...state, basket: newBasket };
      }
      return state;
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const postProduct = async (product) => {
    try {
      await axios.post(API, product);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getProducts = async () => {
    try {
      let { data } = await axios.get(API);
      dispatch({
        type: "GET",
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const setCategory = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await axios.patch(`${API}/${id}`, updatedProduct);
      //   await getOneProduct(id)
      //   await getProducts()
      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  };
  const getOneProduct = async (id) => {
    try {
      let { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const searchPhone = async (value) => {
    try {
      let { data } = await axios.get(
        `${API}?searchKey=name&searchValue=${value}`
      );
      dispatch({
        type: "GET",
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const addToBasket = (product) => {
    dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  const values = {
    postProduct,
    products: state.products,
    getProducts,
    setCategory,
    category: state.category,
    deleteProduct,
    updateProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    searchPhone,
    addToBasket,
    removeFromBasket,
    basket: state.basket,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
