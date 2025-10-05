import React from "react";
import ProductCard from "src/components/product-card";
import type { Product } from "src/components/product-card";

const allProducts: Product[] = [
  { id: 1, name: "Crochet Scarf", price: 499, image: "/images/scarf.jpg" },
  { id: 2, name: "Resin Art Piece", price: 999, image: "/images/resin.jpg" },
  { id: 3, name: "Handmade Bag", price: 799, image: "/images/bag.jpg" },
  { id: 4, name: "Knitted Hat", price: 299, image: "/images/hat.jpg" },
];

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
