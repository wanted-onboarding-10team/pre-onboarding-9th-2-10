export interface TravelProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

export interface ReservedTravelProduct {
  idx: number;
  name: string;
  mainImage: string;
  price: number;
  spaceCategory: string;
}
