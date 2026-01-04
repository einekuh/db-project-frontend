import type { Car } from "./Car";

export interface Listing {
  listing_id: string;
  creator_user_id: string;

  location: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  isFavorite: boolean;
}
export interface ListingDetails {
  listing_id: string;
  creator_user_id: string;
  car: Car;
  location: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  isFavorite: boolean;
}

export const listings: Listing[] = [
  {
    listing_id: "1",
    creator_user_id: "101",
    isFavorite: true,
    location: "Berlin, Germany",
    title: "Volkswagen Golf VII GTI — clean history, serviced",
    description:
      "Golf VII GTI with documented maintenance, recently inspected, no known issues. Interior is clean, drives tight, ready to go.",
    price: 18990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VII_GTI_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/VW_Golf_VII_Variant_Highline_2.0_TDI_Heck.JPG",
    ],
  },
  {
    listing_id: "2",
    creator_user_id: "102",
    isFavorite: true,
    location: "Munich, Germany",
    title: "BMW 3 Series Touring (F31) — economical long-distance car",
    description:
      "Well-kept 3 Series Touring, ideal for commuting and road trips. Regular oil changes, solid tires, and a spacious trunk.",
    price: 16990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_320d_Touring_M_Sport_%28F31%29_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_320d_Touring_M_Sport_%28F31%29_rear.JPG",
    ],
  },
  {
    listing_id: "3",
    creator_user_id: "103",
    isFavorite: true,
    location: "Hamburg, Germany",
    title: "Audi A3 Sportback (8V) — compact premium, great condition",
    description:
      "A3 Sportback with a tidy interior and smooth ride. Kept up with maintenance, practical size for city driving and weekends away.",
    price: 14990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Audi_A3_Sportback_8V_%28front%29.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Audi_A3_Sportback_8V_%28rear_quarter%29.JPG",
    ],
  },
  {
    listing_id: "4",
    creator_user_id: "104",
    isFavorite: true,
    location: "Cologne, Germany",
    title: "Tesla Model 3 — efficient EV, great daily driver",
    description:
      "Model 3 with strong range, quick acceleration, and low running costs. Clean interior, drives perfectly, ready for handover.",
    price: 26990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tesla_Model_3_Front.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tesla_Model_3_rear.jpg",
    ],
  },
  {
    listing_id: "5",
    creator_user_id: "105",
    isFavorite: true,
    location: "Frankfurt, Germany",
    title: "Mercedes-Benz C-Class (W205) — comfortable and refined",
    description:
      "C-Class W205 with a comfortable ride and solid build quality. Regularly maintained, clean cabin, reliable long-distance cruiser.",
    price: 18990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_W205.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_C_220_d_%28W205%2C_2015%29_%2853512093739%29.jpg",
    ],
  },
  {
    listing_id: "6",
    creator_user_id: "106",
    isFavorite: true,
    location: "Stuttgart, Germany",
    title: "Toyota Yaris (XP130) — reliable city car, low running costs",
    description:
      "Yaris XP130, easy to park and cheap to maintain. Clean inside, dependable drivetrain, great as a first car or daily commuter.",
    price: 9990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Yaris_%28XP130%29_%E2%80%93_Frontansicht%2C_21._Juli_2012%2C_Heiligenhaus.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Yaris_%28XP130%29_%E2%80%93_Heckansicht%2C_21._Juli_2012%2C_Heiligenhaus.jpg",
    ],
  },
];
export const listingsFavorites: Listing[] = [
  {
    listing_id: "1",
    creator_user_id: "101",
    isFavorite: true,
    location: "Berlin, Germany",
    title: "Volkswagen Golf VII GTI — clean history, serviced",
    description:
      "Golf VII GTI with documented maintenance, recently inspected, no known issues. Interior is clean, drives tight, ready to go.",
    price: 18990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VII_GTI_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/VW_Golf_VII_Variant_Highline_2.0_TDI_Heck.JPG",
    ],
  },
  {
    listing_id: "2",
    creator_user_id: "102",
    isFavorite: true,
    location: "Munich, Germany",
    title: "BMW 3 Series Touring (F31) — economical long-distance car",
    description:
      "Well-kept 3 Series Touring, ideal for commuting and road trips. Regular oil changes, solid tires, and a spacious trunk.",
    price: 16990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_320d_Touring_M_Sport_%28F31%29_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_320d_Touring_M_Sport_%28F31%29_rear.JPG",
    ],
  },
  {
    listing_id: "3",
    creator_user_id: "103",
    isFavorite: true,
    location: "Hamburg, Germany",
    title: "Audi A3 Sportback (8V) — compact premium, great condition",
    description:
      "A3 Sportback with a tidy interior and smooth ride. Kept up with maintenance, practical size for city driving and weekends away.",
    price: 14990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Audi_A3_Sportback_8V_%28front%29.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Audi_A3_Sportback_8V_%28rear_quarter%29.JPG",
    ],
  },
];
export const homepageListings: Listing[] = [
  {
    listing_id: "1",
    creator_user_id: "101",
    isFavorite: true,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "2",
    creator_user_id: "101",
    isFavorite: true,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "3",
    creator_user_id: "101",
    isFavorite: false,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "4",
    creator_user_id: "101",
    isFavorite: true,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "5",
    creator_user_id: "101",
    isFavorite: false,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "6",
    creator_user_id: "101",
    isFavorite: false,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "7",
    creator_user_id: "101",
    isFavorite: false,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "8",
    creator_user_id: "101",
    isFavorite: false,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "9",
    creator_user_id: "101",
    isFavorite: true,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
  {
    listing_id: "10",
    creator_user_id: "101",
    isFavorite: false,
    location: "Berlin, Germany",
    title: "Ferrari F40 ",
    description:
      "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sportscar engineered by Nicola Materazzi with styling by Pininfarina.",
    price: 18990,
    images: [],
  },
];

export const listingDetails: ListingDetails[] = [
  {
    listing_id: "1",
    creator_user_id: "101",
    isFavorite: true,
    car: {
      car_id: "1",
      brand: "Volkswagen",
      color: "Red",
      condition: "used",
      fuel_type: "petrol",
      registration_date: "2017-03-18",
      kilometer_count: "82000",
      car_type: "Sport",
    },
    location: "Berlin, Germany",
    title: "Volkswagen Golf VII GTI — clean history, serviced",
    description:
      "Golf VII GTI with documented maintenance, recently inspected, no known issues. Interior is clean, drives tight, ready to go.",
    price: 18990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VII_GTI_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/VW_Golf_VII_Variant_Highline_2.0_TDI_Heck.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VII_GTI_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/VW_Golf_VII_Variant_Highline_2.0_TDI_Heck.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VII_GTI_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/VW_Golf_VII_Variant_Highline_2.0_TDI_Heck.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VII_GTI_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/VW_Golf_VII_Variant_Highline_2.0_TDI_Heck.JPG",
    ],
  },
  {
    listing_id: "2",
    creator_user_id: "102",
    isFavorite: true,
    car: {
      car_id: "2",
      brand: "BMW",
      color: "Black",
      condition: "Used",
      fuel_type: "diesel",
      registration_date: "2015-09-20",
      kilometer_count: "128500",
      car_type: "Sport",
    },
    location: "Munich, Germany",
    title: "BMW 3 Series Touring (F31) — economical long-distance car",
    description:
      "Well-kept 3 Series Touring, ideal for commuting and road trips. Regular oil changes, solid tires, and a spacious trunk.",
    price: 16990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_320d_Touring_M_Sport_%28F31%29_front.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_320d_Touring_M_Sport_%28F31%29_rear.JPG",
    ],
  },
  {
    listing_id: "3",
    creator_user_id: "103",
    isFavorite: true,
    car: {
      car_id: "3",
      brand: "Audi",
      color: "White",
      condition: "Like New",
      fuel_type: "diesel",
      registration_date: "2016-06-02",
      kilometer_count: "94500",
      car_type: "Sport",
    },
    location: "Hamburg, Germany",
    title: "Audi A3 Sportback (8V) — compact premium, great condition",
    description:
      "A3 Sportback with a tidy interior and smooth ride. Kept up with maintenance, practical size for city driving and weekends away.",
    price: 14990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Audi_A3_Sportback_8V_%28front%29.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Audi_A3_Sportback_8V_%28rear_quarter%29.JPG",
    ],
  },
  {
    listing_id: "4",
    creator_user_id: "104",
    isFavorite: true,
    car: {
      car_id: "4",
      brand: "Tesla",
      color: "White",
      condition: "New",
      fuel_type: "electric",
      registration_date: "2020-11-10",
      kilometer_count: "0",
      car_type: "Sport",
    },
    location: "Cologne, Germany",
    title: "Tesla Model 3 — efficient EV, great daily driver",
    description:
      "Model 3 with strong range, quick acceleration, and low running costs. Clean interior, drives perfectly, ready for handover.",
    price: 26990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tesla_Model_3_Front.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tesla_Model_3_rear.jpg",
    ],
  },
  {
    listing_id: "5",
    creator_user_id: "105",
    isFavorite: true,
    car: {
      car_id: "5",
      brand: "Mercedes-Benz",
      color: "Silver",
      condition: "Accident damaged",
      fuel_type: "diesel",
      registration_date: "2015-07-14",
      kilometer_count: "112300",
      car_type: "Sport",
    },
    location: "Frankfurt, Germany",
    title: "Mercedes-Benz C-Class (W205) — comfortable and refined",
    description:
      "C-Class W205 with a comfortable ride and solid build quality. Regularly maintained, clean cabin, reliable long-distance cruiser.",
    price: 18990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_W205.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_C_220_d_%28W205%2C_2015%29_%2853512093739%29.jpg",
    ],
  },
  {
    listing_id: "6",
    creator_user_id: "106",
    isFavorite: true,
    car: {
      car_id: "6",
      brand: "Toyota",
      color: "Blue",
      condition: "Used",
      fuel_type: "hybrid",
      registration_date: "2014-04-22",
      kilometer_count: "89500",
      car_type: "Sport",
    },
    location: "Stuttgart, Germany",
    title: "Toyota Yaris (XP130) — reliable city car, low running costs",
    description:
      "Yaris XP130, easy to park and cheap to maintain. Clean inside, dependable drivetrain, great as a first car or daily commuter.",
    price: 9990,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Yaris_%28XP130%29_%E2%80%93_Frontansicht%2C_21._Juli_2012%2C_Heiligenhaus.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Yaris_%28XP130%29_%E2%80%93_Heckansicht%2C_21._Juli_2012%2C_Heiligenhaus.jpg",
    ],
  },
];
