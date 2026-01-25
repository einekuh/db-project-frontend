import type { Car } from "./Car";

export interface Listing {
  listing_id: number;
  creator_user_id: string;
  location: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  is_favorite: boolean;
}

export interface ListingFavorite {
  user_id: number;
  listing: Listing;
  images: string[];
  created_at: string;
}
export interface ListingCreate {
  title: string;
  brand: string;
  color: string;
  car_type: string;
  condition: string;
  location: string;
  description: string;
  price: number;
  images: File[];
}
export interface ListingDetails {
  listing_id: number;
  creator_user_id: string;
  location: string;
  title: string;
  car_description: string;
  is_favorite: boolean;
  price: number;
  car: Car;
  images: string[];
}

export interface ListingEdit {
  title?: string;
  brand?: string;
  color?: string;
  car_type?: string;
  condition?: string;
  location?: string;
  description?: string;
  price?: number;
  brand_id?: number;
  color_id?: number;
  car_type_id?: number;
  condition_id?: number;
  location_id?: number;
  images?: File[];
}

export interface UserListings {
  user_id: number;
  listings: Listing[];
}
