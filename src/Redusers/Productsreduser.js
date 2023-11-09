export default function Productsreduser(state, action) {
  if (action.type === "GET_PRODUTS_BEGIN") {
    return { ...state, produts_loading: true };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      produts: action.payload,
      produts_loading: false,
      featured_products: featured_products,
    };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return { ...state, produts_loading: false, produts_error: true };
  }
  if (action.type === "GET_SINGEL_PRODUCT_BEGIN") {
    return { ...state, singel_product_loading: true };
  }
  if (action.type === "GET_SINGEL_PRODUCT_SUCCESS") {
    return {
      ...state,
      singel_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === "GET_SINGEL_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_error: true,
      singel_product_loading: false,
    };
  }
  return state;
}
