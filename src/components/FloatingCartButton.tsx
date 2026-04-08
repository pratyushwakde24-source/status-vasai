import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const FloatingCartButton = () => {
  const { toggleCart, cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={toggleCart}
      className="fixed bottom-20 right-4 bg-amber-500 text-black p-4 rounded-full shadow-lg z-40"
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;