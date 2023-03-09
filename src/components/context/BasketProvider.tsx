import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { TravleContentType } from 'types';

type Action =
  | { type: 'ADD_ITEM'; item: TravleContentType }
  | { type: 'DELETE_ITEM'; item: TravleContentType }
  | { type: 'UPDATE_ITEM'; item: TravleContentType; changeQuantity: number };

type ActionDispatch = Dispatch<Action>;
type BasketState = TravleContentType[];
export const BasketStateContext = createContext<BasketState | null>(null);
export const BasketDispatchContext = createContext<ActionDispatch | null>(null);

function reducer(state: BasketState, action: Action): BasketState {
  switch (action.type) {
    case 'ADD_ITEM':
      const addData = [...state];
      addData.push({ ...action.item });
      localStorage.setItem('shopping-basket', JSON.stringify(addData));
      return addData;
    case 'DELETE_ITEM':
      const deleteData = [...state].filter(value => value.idx !== action.item.idx);
      localStorage.setItem('shopping-basket', JSON.stringify(deleteData));
      return deleteData;
    case 'UPDATE_ITEM':
      const updateData = [...state];
      updateData[updateData.findIndex(data => data.idx === action.item.idx)].quantity =
        action.changeQuantity;
      localStorage.setItem('shopping-basket', JSON.stringify(updateData));
      return updateData;
    default:
      throw new Error('Unhandleed Action');
  }
}
const BasketProvider = ({ children }: { children: ReactNode }) => {
  const localdata = localStorage.getItem('shopping-basket');
  const [basket, dispatch] = useReducer(reducer, localdata === null ? [] : JSON.parse(localdata));

  return (
    <BasketStateContext.Provider value={basket}>
      <BasketDispatchContext.Provider value={dispatch}>{children}</BasketDispatchContext.Provider>
    </BasketStateContext.Provider>
  );
};
export default BasketProvider;

export function useBasketState() {
  const state = useContext(BasketStateContext);
  if (!state) throw new Error('cannot find BasketProvider');
  return state;
}

export function useBasketDispatch() {
  const dispatch = useContext(BasketDispatchContext);
  if (!dispatch) throw new Error('cannot find BasketProvider');
  return dispatch;
}
