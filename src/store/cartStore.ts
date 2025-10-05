import { create } from "zustand";
import type { Product } from "src/components/product-card";

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (product) => set((state) => ({ items: [...state.items, product] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clearCart: () => set({ items: [] }),
}));
