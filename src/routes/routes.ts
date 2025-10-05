export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_DETAILS: (id: number | string) => `/products/${id}`,
  CART: "/cart",
  LOGIN: "/login",
};
