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
      const added = [...state];
      added.push(action.item);
      return added;
    case 'DELETE_ITEM':
      return [...state].filter(v => v.idx !== action.item.idx);
    default:
      throw new Error('Unhandleed Action');
  }
}

const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, dispatch] = useReducer(reducer, []);

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
