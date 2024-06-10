import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import product1 from "../assets/product_imgs/product-img-1.jpg";
import product2 from "../assets/product_imgs/product-img-2.jpg";
import product3 from "../assets/product_imgs/product-img-3.jpg";
import product4 from "../assets/product_imgs/product-img-4.jpg";
import product5 from "../assets/product_imgs/product-img-5.jpg";
import product6 from "../assets/product_imgs/product-img-6.jpg";
import product7 from "../assets/product_imgs/product-img-7.jpg";
import product8 from "../assets/product_imgs/product-img-8.jpg";
import product9 from "../assets/product_imgs/product-img-9.jpg";
import product10 from "../assets/product_imgs/product-img-10.jpg";
import product11 from "../assets/product_imgs/product-img-11.jpg";
import product12 from "../assets/product_imgs/product-img-12.jpg";
import product13 from "../assets/product_imgs/product-img-13.jpg";
import product14 from "../assets/product_imgs/product-img-14.jpg";
import product15 from "../assets/product_imgs/product-img-15.jpg";
import product16 from "../assets/product_imgs/product-img-16.jpg";
import product17 from "../assets/product_imgs/product-img-17.jpg";
import product18 from "../assets/product_imgs/product-img-18.jpg";
import product19 from "../assets/product_imgs/product-img-19.jpg";
import product20 from "../assets/product_imgs/product-img-20.jpg";
import product21 from "../assets/product_imgs/product-img-21.jpg";
import product22 from "../assets/product_imgs/product-img-22.jpg";
import product23 from "../assets/product_imgs/product-img-23.jpg";
import product24 from "../assets/product_imgs/product-img-24.jpg";
import product25 from "../assets/product_imgs/product-img-25.jpg";
import product26 from "../assets/product_imgs/product-img-26.jpg";
import product27 from "../assets/product_imgs/product-img-27.jpg";
import product28 from "../assets/product_imgs/product-img-28.jpg";
import product29 from "../assets/product_imgs/product-img-29.jpg";

import { cartReducer } from "./Reducer";

const Cart = createContext();

const ContextApi = ({ children }) => {
  const Data = [
    {
      id: 1,
      name: "Noni juice",
      price: 150,
      cat: "Drink",
      image: product1,
    },
    {
      id: 2,
      name: "Lemon juice",
      price: 360,
      cat: "Drink",
      image: product2,
    },
    {
      id: 3,
      name: "Cashew milk",
      price: 250,
      cat: "Drink",
      image: product3,
    },
    {
      id: 4,
      name: "Orange juice",
      price: 290,
      cat: "Drink",
      image: product4,
    },
    {
      id: 5,
      name: "Rick juice",
      price: 500,
      cat: "Milk",
      image: product5,
    },
    {
      id: 6,
      name: "Orange juice",
      price: 560,
      cat: "Drink",
      image: product6,
    },
    {
      id: 7,
      name: "Mango juice",
      price: 160,
      cat: "Drink",
      image: product7,
    },
    {
      id: 8,
      name: "Mango Milk",
      price: 500,
      cat: "Milk",
      image: product8,
    },
    {
      id: 9,
      name: "Orange Juice",
      price: 900,
      cat: "Milk",
      image: product9,
    },
    {
      id: 10,
      name: "Orange Milk",
      price: 510,
      cat: "Drink",
      image: product10,
    },
    {
      id: 11,
      name: "Orange juice",
      price: 560,
      cat: "Drink",
      image: product11,
    },
    {
      id: 12,
      name: "Strawbery juice",
      price: 560,
      cat: "Drink",
      image: product12,
    },
    {
      id: 13,
      name: "multigrain chips",
      price: 560,
      cat: "Food",
      image: product13,
    },
    {
      id: 14,
      name: "Erbsen Crispy",
      price: 560,
      cat: "Food",
      image: product14,
    },
    {
      id: 15,
      name: "Crunchy Potato Chips",
      price: 960,
      cat: "Food",
      image: product15,
    },
    {
      id: 16,
      name: "Too Yumm",
      price: 360,
      cat: "Food",
      image: product16,
    },
    {
      id: 17,
      name: "Too Yumm",
      price: 560,
      cat: "Food",
      image: product17,
    },
    {
      id: 18,
      name: "Crunchy Potato Chips",
      price: 660,
      cat: "Food",
      image: product18,
    },
    {
      id: 19,
      name: "Crunchy Potato Chips",
      price: 560,
      cat: "Food",
      image: product19,
    },
    {
      id: 20,
      name: "Lime & Cracked pepper",
      price: 500,
      cat: "Food",
      image: product20,
    },
    {
      id: 21,
      name: "Crunchy Tomato Chips",
      price: 960,
      cat: "Food",
      image: product21,
    },
    {
      id: 22,
      name: "Lays Poppables",
      price: 760,
      cat: "Food",
      image: product22,
    },
    {
      id: 23,
      name: "Cracker Crisps",
      price: 560,
      cat: "Food",
      image: product23,
    },
    {
      id: 24,
      name: "Coffee Cup Mockup",
      price: 460,
      cat: "Coffee",
      image: product24,
    },
    {
      id: 25,
      name: "Coffee Kraft Caps",
      price: 560,
      cat: "Coffee",
      image: product25,
    },
    {
      id: 26,
      name: "Coffee",
      price: 460,
      cat: "Coffee",
      image: product26,
    },
    {
      id: 27,
      name: "Hot Amaricano",
      price: 560,
      cat: "Coffee",
      image: product27,
    },
    {
      id: 28,
      name: "Hot Late",
      price: 560,
      cat: "Coffee",
      image: product28,
    },
    {
      id: 29,
      name: "Ice Late",
      price: 260,
      cat: "Coffee",
      image: product29,
    },
  ];

  const [search, setSearch] = useState("");
  const [seletedCat, setSelectedCat] = useState("All");

  const initialState = {
    products: Data,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  };

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        search,
        setSearch,
        seletedCat,
        setSelectedCat,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default ContextApi;

export const CartState = () => {
  return useContext(Cart);
};
