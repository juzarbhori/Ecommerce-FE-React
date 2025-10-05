import React from "react";
import { useParams } from "react-router-dom";
import type { Product } from "src/components/product-card";
import { useCartStore } from "src/store/cartStore";

const sampleProducts: Product[] = [
  { id: 1, name: "Crochet Scarf", price: 499, image: "/images/scarf.jpg" },
  { id: 2, name: "Resin Art Piece", price: 999, image: "/images/resin.jpg" },
  { id: 3, name: "Handmade Bag", price: 799, image: "/images/bag.jpg" },
  { id: 4, name: "Knitted Hat", price: 299, image: "/images/hat.jpg" },
];

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = sampleProducts.find((p) => p.id === Number(id));
  const addToCart = useCartStore((state) => state.addItem);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover rounded"
      />
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-indigo-600 font-bold text-2xl">₹{product.price}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          gravida arcu.
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
