import React from 'react';
import { Star, Users, Utensils } from 'lucide-react';

const reasons = [
  {
    icon: <Utensils className="h-12 w-12 text-amber-500" />,
    title: "Authentic Flavors",
    description: "Our chefs masterfully blend traditional recipes with a modern touch, creating a culinary experience that is both unique and unforgettable.",
  },
  {
    icon: <Users className="h-12 w-12 text-amber-500" />,
    title: "Vibrant Social Vibe",
    description: "Status is more than a restaurant; it's a place to connect. The energetic yet relaxed atmosphere makes it perfect for any occasion.",
  },
  {
    icon: <Star className="h-12 w-12 text-amber-500" />,
    title: "Generous Portions",
    description: "We believe in satisfying your cravings. Our generous portions ensure you get great value and a truly fulfilling meal.",
  },
];

const WhyPeopleLove = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-white mb-12">
          Why People Love Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-800 p-6 rounded-full mb-6 border-2 border-amber-500/30">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-serif text-amber-500 mb-2">{reason.title}</h3>
              <p className="text-gray-400 max-w-xs">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPeopleLove;