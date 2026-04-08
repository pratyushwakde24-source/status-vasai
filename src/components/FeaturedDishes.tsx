'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const featuredDishes = [
  {
    name: "Chicken Biryani",
    description: "Aromatic basmati rice and succulent chicken, slow-cooked to perfection.",
    price: "₹350",
    image: "/images/food/biryani.jpg",
    tag: "Best Seller",
    rating: 4.8,
  },
  {
    name: "Chilli Chicken",
    description: "Crispy chicken tossed in a spicy and tangy sauce with peppers.",
    price: "₹300",
    image: "/images/food/chilli-chicken.jpg",
    tag: "Chef Special",
    rating: 4.6,
  },
  {
    name: "Mutton Kebab",
    description: "Minced mutton mixed with spices and grilled on skewers.",
    price: "₹450",
    image: "/images/food/kebab.jpg",
    tag: "",
    rating: 4.7,
  },
  {
    name: "Paneer Tikka",
    description: "Soft paneer cubes marinated in yogurt and spices, grilled to perfection.",
    price: "₹280",
    image: "/images/food/paneer-tikka.jpg",
    tag: "Best Seller",
    rating: 4.5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-dark-charcoal">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-soft-white">
            Our Signature Dishes
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Crafted with passion by our expert chefs, these are the flavors that define The Status Vasai experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/30 border border-white/10 text-soft-white overflow-hidden h-full flex flex-col group transition-all duration-300 hover:border-brand-gold/50 hover:shadow-2xl hover:shadow-brand-gold/10">
                <CardHeader className="p-0 relative">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image src={dish.image} alt={dish.name} layout="fill" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  {dish.tag && (
                    <div className="absolute top-3 right-3 bg-brand-gold text-black px-3 py-1 text-xs font-bold rounded-full shadow-lg">
                      {dish.tag}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-serif text-brand-gold mb-2">{dish.name}</CardTitle>
                  <p className="text-gray-400 text-sm mb-4">{dish.description}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />
                    <span className="font-bold">{dish.rating}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <p className="text-xl font-bold">{dish.price}</p>
                  <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-colors">Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;