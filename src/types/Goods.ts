type spaceType = '서울' | '강원' | '부산' | '대구' | '제주';

export interface GoodsType {
  idx: number;
  name: string;
  mainImage: string;
  spaceCategory: spaceType;
  price: number;
  description: string;
  maximumPurchases: number;
  registrationDate: string;
}

export type GoodsDetailType = GoodsType;
