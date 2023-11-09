//Contexts/products_Context.js
import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import filter_reducer from "../Redusers/filter_reducer";

import { dataArr } from "../Data/dataArr";
const FilterContext = React.createContext();
const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    shipping: false,
  },
};
export const FilterProvider = ({ children }) => {
 const products=dataArr
 
  const [state, dispatch] = useReducer(filter_reducer, initialState);




  const updateSort = (e) => {
    //const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: "UPDATE_SORT", payload: value });
  };



  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category" || name === "company") {
      value = e.target.textContent;
    }

    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };



  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };



  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
    dispatch({ type: "SORT_PRODUCTS", payload: products });
  }, [products, state.sort, state.filters]);



  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);


  

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
