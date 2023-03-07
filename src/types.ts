import { ReactNode } from 'react';

export interface Data {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

export interface GetData {
  data: Data[];
}

export interface DataProps {
  props: Data;
}

export interface ComponentProps {
  children: ReactNode;
}
