import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Sharma",
    text: "The ambience at Status is just unmatched in Vasai. It's my go-to place for a chill evening with friends. The food is amazing too, especially the biryani!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    text: "I hosted my birthday party here and it was a blast! The staff was so cooperative and the food was a hit with all my guests. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sameer Khan",
    text: "Great value for money. The portion sizes are huge and the quality is top-notch. The vibe is perfect for a weekend hangout.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center text-white mb-12">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 text-white border-amber-500/20 p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-amber-500 text-right">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;