import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "src/store/cartStore";
import { ROUTES } from "src/routes/routes";

const Navbar: React.FC = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={ROUTES.HOME} className="text-2xl font-bold text-indigo-600">
          KnittyKnit
        </Link>
        <div className="flex items-center space-x-6">
          <Link to={ROUTES.HOME} className="hover:text-indigo-600">
            Home
          </Link>
          <Link to={ROUTES.PRODUCTS} className="hover:text-indigo-600">
            Products
          </Link>
          <Link to={ROUTES.CART} className="relative hover:text-indigo-600">
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link to={ROUTES.LOGIN} className="hover:text-indigo-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
