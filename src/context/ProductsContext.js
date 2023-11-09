import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import Productsreduser from "../Redusers/Productsreduser";
import axios from "axios";
import { useEffect } from "react";
const ProdutsContext = React.createContext();
const initialstate = {
  test: "test1",
  produts_loading: false,
  produts_error: false,
  produts: [],
  featured_products: [],
  singel_product_loading:false,
  single_product_error:false,
  single_product:{}

};




export const ProdutsProvider = ({ children }) => {
   
  const [state, dispatch] = useReducer(Productsreduser, initialstate);

console.log(state.produts);
  

  const fetchProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const response = await axios(url);
      const products = response.data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  const fetchSingelProduct=async (url)=>{
    dispatch({type:"GET_SINGEL_PRODUCT_BEGIN"})
    try{
      const response=await axios(url);
      const single_product = response.data;
      dispatch({ type: "GET_SINGEL_PRODUCT_SUCCESS", payload: single_product });
    }
    catch(error){
      dispatch({ type: "GET_SINGEL_PRODUCT_ERROR" });
      console.log(error)
    }
  }


  useEffect(() => {
    fetchProducts("https://6527afd3931d71583df1318d.mockapi.io/produts");
  }, []);

 

  return (
    <ProdutsContext.Provider
      value={{ ...state, fetchSingelProduct }}
    >
      {children}
    </ProdutsContext.Provider>
  );
};

export const useProdutsContext = () => {
  return useContext(ProdutsContext);
};
