import React from 'react';
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

const EventsCTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-white mb-4">
          Plan Your Night at Status
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          From birthdays to friendly gatherings, we make every celebration special.
        </p>
        <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-600">
          Book Your Event <PartyPopper className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default EventsCTA;