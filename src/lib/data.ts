// ─── Menu Data ───────────────────────────────────────────────

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tag?: "Best Seller" | "Chef Special" | "Mixologist Pick" | "New";
  rating: number;
  reviews: number;
  veg: boolean;
}

export const menuCategories = [
  "North Indian",
  "Chinese",
  "Mughlai",
  "Biryani",
  "Drinks",
  "Starters",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export const menuItems: MenuItem[] = [
  // North Indian
  {
    id: "ni-1",
    name: "Royal Tandoori Murg",
    description:
      "Whole chicken marinated overnight in our secret hand-pounded spices and yogurt, roasted in a traditional clay oven.",
    price: 545,
    image: "/images/food/tandoori-chicken.jpg",
    category: "North Indian",
    tag: "Best Seller",
    rating: 4.9,
    reviews: 120,
    veg: false,
  },
  {
    id: "ni-2",
    name: "Dal Status Signature",
    description:
      "Slow-cooked black lentils simmered for 24 hours with vine-ripened tomatoes and white butter.",
    price: 395,
    image: "/images/food/dal-signature.jpg",
    category: "North Indian",
    tag: "Chef Special",
    rating: 4.8,
    reviews: 250,
    veg: true,
  },
  {
    id: "ni-3",
    name: "Paneer Tikka Lababdar",
    description:
      "Char-grilled cottage cheese cubes folded into a rich onion-tomato gravy with melon seeds and ginger.",
    price: 445,
    image: "/images/food/paneer-tikka.jpg",
    category: "North Indian",
    rating: 4.7,
    reviews: 80,
    veg: true,
  },
  {
    id: "ni-4",
    name: "Butter Chicken Royale",
    description:
      "Tender chicken chunks in a velvety tomato-butter sauce with aromatic fenugreek and cashew cream.",
    price: 495,
    image: "/images/food/tandoori-chicken.jpg",
    category: "North Indian",
    tag: "Best Seller",
    rating: 4.9,
    reviews: 340,
    veg: false,
  },
  // Chinese
  {
    id: "ch-1",
    name: "Crispy Lotus Stem",
    description:
      "Thinly sliced lotus root chips tossed in a spicy-sweet Sichuan reduction with toasted sesame.",
    price: 375,
    image: "/images/food/crispy-lotus.jpg",
    category: "Chinese",
    rating: 4.6,
    reviews: 56,
    veg: true,
  },
  {
    id: "ch-2",
    name: "Dragon Fire Chicken",
    description:
      "Crispy boneless chicken tossed in fiery chilli-garlic sauce with bell peppers and scallions.",
    price: 425,
    image: "/images/food/crispy-lotus.jpg",
    category: "Chinese",
    tag: "Chef Special",
    rating: 4.7,
    reviews: 89,
    veg: false,
  },
  {
    id: "ch-3",
    name: "Hakka Noodles Supreme",
    description:
      "Wok-tossed hand-pulled noodles with fresh vegetables and our secret Indo-Chinese sauce.",
    price: 345,
    image: "/images/food/crispy-lotus.jpg",
    category: "Chinese",
    rating: 4.5,
    reviews: 120,
    veg: true,
  },
  // Mughlai
  {
    id: "mg-1",
    name: "Mughlai Seekh Kebab",
    description:
      "Hand-minced lamb skewers with aromatic spices and herbs, grilled over live charcoal.",
    price: 495,
    image: "/images/food/tandoori-chicken.jpg",
    category: "Mughlai",
    tag: "Chef Special",
    rating: 4.8,
    reviews: 145,
    veg: false,
  },
  {
    id: "mg-2",
    name: "Shahi Paneer Korma",
    description:
      "Cottage cheese cubes in a luxurious saffron and cashew nut gravy with dried rose petals.",
    price: 465,
    image: "/images/food/paneer-tikka.jpg",
    category: "Mughlai",
    rating: 4.6,
    reviews: 67,
    veg: true,
  },
  {
    id: "mg-3",
    name: "Raan-E-Status",
    description:
      "Whole leg of lamb slow-roasted for 8 hours with 32 spices, served with saffron rice.",
    price: 1295,
    image: "/images/food/tandoori-chicken.jpg",
    category: "Mughlai",
    tag: "Chef Special",
    rating: 5.0,
    reviews: 42,
    veg: false,
  },
  // Biryani
  {
    id: "br-1",
    name: "Vasai Fort Biryani",
    description:
      "A majestic blend of aged basmati and marinated mutton, dum-cooked in a sealed dough pot.",
    price: 595,
    image: "/images/food/biryani.jpg",
    category: "Biryani",
    tag: "Best Seller",
    rating: 5.0,
    reviews: 400,
    veg: false,
  },
  {
    id: "br-2",
    name: "Hyderabadi Chicken Biryani",
    description:
      "Aromatic long-grain rice layered with spiced chicken, saffron threads, and caramelized onions.",
    price: 495,
    image: "/images/food/biryani.jpg",
    category: "Biryani",
    rating: 4.8,
    reviews: 220,
    veg: false,
  },
  {
    id: "br-3",
    name: "Paneer Dum Biryani",
    description:
      "Fragrant basmati with marinated paneer, fresh herbs, and a cascade of fried onions.",
    price: 445,
    image: "/images/food/biryani.jpg",
    category: "Biryani",
    rating: 4.6,
    reviews: 95,
    veg: true,
  },
  // Drinks
  {
    id: "dr-1",
    name: "The Gold Rush",
    description:
      "Artisan bourbon, organic wildflower honey, and freshly squeezed lemon. Shaken to perfection.",
    price: 650,
    image: "/images/food/gold-rush-cocktail.jpg",
    category: "Drinks",
    tag: "Mixologist Pick",
    rating: 4.9,
    reviews: 32,
    veg: true,
  },
  {
    id: "dr-2",
    name: "Midnight Mojito",
    description:
      "Dark rum muddled with fresh mint, lime, and a hint of activated charcoal for dramatic flair.",
    price: 550,
    image: "/images/food/gold-rush-cocktail.jpg",
    category: "Drinks",
    rating: 4.7,
    reviews: 78,
    veg: true,
  },
  {
    id: "dr-3",
    name: "Vasai Sunset Cooler",
    description:
      "A refreshing blend of mango, passion fruit, and sparkling water with a citrus rim.",
    price: 295,
    image: "/images/food/gold-rush-cocktail.jpg",
    category: "Drinks",
    tag: "New",
    rating: 4.5,
    reviews: 18,
    veg: true,
  },
  // Starters
  {
    id: "st-1",
    name: "Achari Paneer Tikka",
    description:
      "Chunky paneer marinated in pickle spices, grilled to smoky perfection with peppers.",
    price: 395,
    image: "/images/food/paneer-tikka.jpg",
    category: "Starters",
    rating: 4.7,
    reviews: 67,
    veg: true,
  },
  {
    id: "st-2",
    name: "Chicken Malai Kebab",
    description:
      "Creamy, melt-in-mouth chicken kebabs with cashew paste and white pepper.",
    price: 445,
    image: "/images/food/tandoori-chicken.jpg",
    category: "Starters",
    tag: "Best Seller",
    rating: 4.9,
    reviews: 195,
    veg: false,
  },
];

// ─── Testimonials ────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rahul Sharma",
    text: "Best restaurant in Vasai! The Vasai Fort Biryani is absolutely divine. The ambience at night is perfect for date nights.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: "t2",
    name: "Priya Patel",
    text: "We celebrated my birthday here and the team made it so special! The food portions are generous and everything tastes authentic.",
    rating: 5,
    avatar: "PP",
  },
  {
    id: "t3",
    name: "Akshay Desai",
    text: "The cocktails are next level! Gold Rush is my go-to drink now. Great place to chill with friends on weekends.",
    rating: 4,
    avatar: "AD",
  },
  {
    id: "t4",
    name: "Sneha Joshi",
    text: "High-quality food at reasonable prices. The Dal Status Signature is to die for! Will keep coming back.",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: "t5",
    name: "Vikram Naik",
    text: "The outdoor seating area is magical at night. Perfect vibes, amazing food, and friendly staff. Status is THE spot in Vasai!",
    rating: 5,
    avatar: "VN",
  },
];

// ─── Gallery Images ──────────────────────────────────────────

export const galleryImages = [
  { src: "/images/ambience/hero.png", alt: "Restaurant Interior" },
  { src: "/images/food/tandoori-chicken.jpg", alt: "Tandoori Chicken" },
  { src: "/images/ambience/bar.png", alt: "Bar Area" },
  { src: "/images/food/biryani.jpg", alt: "Vasai Fort Biryani" },
  { src: "/images/ambience/outdoor.png", alt: "Outdoor Seating" },
  { src: "/images/food/gold-rush-cocktail.jpg", alt: "The Gold Rush Cocktail" },
  { src: "/images/food/dal-signature.jpg", alt: "Dal Status Signature" },
  { src: "/images/food/paneer-tikka.jpg", alt: "Paneer Tikka Lababdar" },
];

// ─── Time Slots ──────────────────────────────────────────────

export const timeSlots = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

// ─── Why People Love Status ─────────────────────────────────

export const loveReasons = [
  {
    icon: "🌙",
    title: "Night Vibes",
    description:
      "Immersive dark-themed ambience with warm golden lighting — perfect for unwinding.",
  },
  {
    icon: "🍖",
    title: "Generous Portions",
    description:
      "We believe in feeding the soul. Expect portions that satisfy and flavours that linger.",
  },
  {
    icon: "🎉",
    title: "Social Hub",
    description:
      "From Friday parties to birthday celebrations — Status is where Vasai comes alive.",
  },
  {
    icon: "🍹",
    title: "Artisan Drinks",
    description:
      "Handcrafted cocktails and curated beverages that complement every dish perfectly.",
  },
];
