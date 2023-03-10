export interface travelContent {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

export interface FilterItems {
  price: number[];
  spaceCategory: string[];
}

export interface basketItem {
  idx: number;
  name: string;
  mainImage: string;
  price: number;
  maximumPurchases: number;
  count: number;
}
