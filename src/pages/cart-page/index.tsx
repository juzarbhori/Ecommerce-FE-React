import React from "react";
import { useCartStore } from "src/store/cartStore";

const CartPage: React.FC = () => {
  const { items, removeItem, clearCart } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0)
    return <div className="text-center text-xl mt-10">Your cart is empty</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded"
        >
          <div className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-indigo-600 font-bold">₹{item.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right text-xl font-bold">Total: ₹{total}</div>
      <div className="text-right">
        <button
          onClick={clearCart}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
