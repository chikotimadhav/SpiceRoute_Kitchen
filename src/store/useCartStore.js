import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  isCartOpen: false,
  isCheckoutOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  openCheckout: () => {
    set({ isCheckoutOpen: true, isCartOpen: false });
  },
  closeCheckout: () => set({ isCheckoutOpen: false }),

  addToCart: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isCartOpen: true,
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }], isCartOpen: true };
    });
  },

  removeFromCart: (itemName) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== itemName),
    })),

  updateQuantity: (itemName, amount) =>
    set((state) => ({
      items: state.items
        .map((i) => {
          if (i.name === itemName) {
            return { ...i, quantity: i.quantity + amount };
          }
          return i;
        })
        .filter((i) => i.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
