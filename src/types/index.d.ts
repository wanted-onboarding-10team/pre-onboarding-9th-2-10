export interface travleContent {
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
