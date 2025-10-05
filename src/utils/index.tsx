import type { Product } from "src/components/product-card";

export const formatCurrency = (amount: number) => {
  return `₹${amount.toFixed(2)}`;
};

export const getProductById = (products: Product[], id: number) =>
  products.find((p) => p.id === id);

export const calculateCartTotal = (items: Product[]) =>
  items.reduce((total, item) => total + item.price, 0);
