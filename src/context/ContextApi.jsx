import { createContext } from "react";

const Cart = createContext();

const ContextApi = ({ children }) => {
  return <Cart.Provider>{children}</Cart.Provider>;
};

export default ContextApi;
