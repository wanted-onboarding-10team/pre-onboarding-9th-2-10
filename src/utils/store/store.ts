import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReservedTravelProduct } from 'utils/type/travelProduct';
import { addReservedTravelProduct, getReservedTravelProduct } from 'utils/utils';

const reservedSlice = createSlice({
  name: 'reservation',
  initialState: getReservedTravelProduct() as ReservedTravelProduct[],
  reducers: {
    add(state, { payload: product }: PayloadAction<ReservedTravelProduct>) {
      const isExist = state.some(existed => existed.idx === product.idx);
      if (!isExist) {
        addReservedTravelProduct(product);
        return [...state, product];
      }
      return state;
    },
    removeItem(state, { payload: id }: PayloadAction<ReservedTravelProduct>) {
      return state.filter(product => product !== id);
    },
  },
});

export const store = configureStore({
  reducer: {
    reservation: reservedSlice.reducer,
  },
});

export const { add, removeItem } = reservedSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
