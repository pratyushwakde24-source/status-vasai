'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <Card className="bg-gray-900 border-amber-500/20 text-white overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <CardHeader className="p-0 relative">
        <Image src={item.image} alt={item.name} width={400} height={300} className="object-cover" />
        {item.tag && (
          <div className="absolute top-2 right-2 bg-amber-500 text-black px-2 py-1 text-xs font-bold rounded">
            {item.tag}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-serif text-amber-500">{item.name}</CardTitle>
        <p className="text-gray-400 text-sm mt-2">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-0">
        <p className="text-lg font-bold">{`₹${item.price}`}</p>
        <Button 
          className="bg-amber-500 text-black hover:bg-amber-600"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;