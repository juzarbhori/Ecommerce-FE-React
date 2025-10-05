import React from "react";
import ProductCard from "src/components/product-card";
import type { Product } from "src/components/product-card";

const sampleProducts: Product[] = [
  { id: 1, name: "Crochet Scarf", price: 499, image: "/images/scarf.jpg" },
  { id: 2, name: "Resin Art Piece", price: 999, image: "/images/resin.jpg" },
  { id: 3, name: "Handmade Bag", price: 799, image: "/images/bag.jpg" },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
