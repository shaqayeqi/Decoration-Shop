//Reducers/filter_reducer.js
export default function filter_reducer(state, action) {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters },
    };
  }

  if (action.type === "UPDATE_SORT") {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        text: "",
        company: "all",
        category: "all",
        shipping: false,
      },
    };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }

  if (action.type === "SORT_PRODUCTS") {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    }

    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => {
        if (b.price > a.price) {
          return 1;
        }
        if (b.price < a.price) {
          return -1;
        }
        return 0;
      });
    }

    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }

  if (action.type === "FILTER_PRODUCTS") {
    // console.log("filtering products");
    const { text, company, category, shipping } = state.filters;
    const { all_products } = state;
    let tempProducts = [...all_products];

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }

    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company.toLowerCase() === company.toLowerCase();
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category.toLowerCase() === category.toLowerCase();
      });
    }

    if (shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.shipping === true;
      });
    }
    return {
      ...state,
      filtered_products: tempProducts,
    };
  }
}
