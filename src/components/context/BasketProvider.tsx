import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { travleContent } from 'types';

type Action =
  | { type: 'ADD_ITEM'; item: travleContent }
  | { type: 'DELETE_ITEM'; item: travleContent };

type ActionDispatch = Dispatch<Action>;
type BasketState = travleContent[];
export const BasketStateContext = createContext<BasketState | null>(null);
export const BasketDispatchContext = createContext<ActionDispatch | null>(null);

function reducer(state: travleContent[], action: Action): BasketState {
  switch (action.type) {
    case 'ADD_ITEM':
      const addData = [...state];
      const filteredReservations = addData.filter(
        reservation => reservation.idx !== action.item.idx,
      );
      localStorage.setItem(
        'shopping-basket',
        JSON.stringify([...filteredReservations, action.item]),
      );
      return [...filteredReservations, action.item];
    case 'DELETE_ITEM':
      const deleteData = [...state];
      deleteData.splice(
        deleteData.findIndex(v => v.idx === action.item.idx),
        1,
      );
      localStorage.setItem('shopping-basket', JSON.stringify(deleteData));
      return deleteData;
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
