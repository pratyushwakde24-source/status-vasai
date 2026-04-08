import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import WhyPeopleLove from "@/components/WhyPeopleLove";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsCTA from "@/components/EventsCTA";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDishes />
      <WhyPeopleLove />
      <GallerySection />
      <TestimonialsSection />
      <EventsCTA />
      <LocationSection />
      <Footer />
    </>
  );
}
