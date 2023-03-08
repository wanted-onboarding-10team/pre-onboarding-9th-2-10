import { ReservedTravelProduct } from './type/travelProduct';

const RESERVED_KEY = 'reservedTravel';

export const formatPrice = (price: number) => {
  return price.toLocaleString();
};

export const getReservedTravelProduct = () => {
  const items = localStorage.getItem(RESERVED_KEY);
  return items ? JSON.parse(items) : [];
};

export const addReservedTravelProduct = (travelProduct: ReservedTravelProduct) => {
  const prev = getReservedTravelProduct();
  localStorage.setItem(RESERVED_KEY, JSON.stringify([...prev, travelProduct]));
};
