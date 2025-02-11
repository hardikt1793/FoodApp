import { RestaurantStatus } from "@/utils/enum";

export type Restaurant = {
    name: string;
    id: number;
    rating: number;
    reviews: number;
    cuisine: string;
    status: RestaurantStatus;
    distance: string;
    latitude: number;
    longitude: number;
    image: string;
};