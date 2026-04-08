import React from 'react';
import { useCart } from '@/lib/cart-context';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';

const CartPanel = () => {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl font-serif">Your Order</h2>
        <Button variant="ghost" size="icon" onClick={toggleCart}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100vh-160px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center mt-8">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover" />
              <div className="flex-grow">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-400">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
                <span>{item.quantity}</span>
                <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                <X className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex justify-between mb-4">
            <span className="text-lg">Subtotal</span>
            <span className="text-lg font-bold">₹{subtotal.toFixed(2)}</span>
          </div>
          <Button className="w-full bg-amber-500 text-black hover:bg-amber-600">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPanel;