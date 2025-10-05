import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "src/store/cartStore";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <div className="border rounded-md shadow-sm p-4 flex flex-col">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
        <p className="text-indigo-600 font-bold mt-1">₹{product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-indigo-600 text-white py-1 rounded hover:bg-indigo-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
