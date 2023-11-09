import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { shopping_reduser } from "../Redusers/shopping_reduser";
import { useEffect } from "react";
const ShoppingContext = React.createContext();

const initialState = {
  cart: [],
  totalAmount: 0,
  totalItem:0
 
};

export const ShoppingProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(shopping_reduser, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const removeAllFromCart=()=>{
    dispatch({type: "REMOVE_ALL_FROM_CART"})
  }
  const qtyInIncreament=(id)=>{
    dispatch({type: "QTY_INCREAMENT" , payload: id})

  }
  const qtyDecreament=(id)=>{
    dispatch({type : "QTY_DECREAMENT" ,payload : id})
  }

  useEffect(()=>{
    dispatch({type:"GET_TOTAL"})
  },[state.cart])

  return (
    <ShoppingContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        qtyInIncreament,
        qtyDecreament,
        
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};
