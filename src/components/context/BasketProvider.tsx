
import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { basketItem } from 'types';

type Action =
  | { type: 'ADD_ITEM'; item: basketItem }
  | { type: 'DELETE_ITEM'; item: basketItem }
  | { type: 'CHANGE_COUNT'; item: basketItem };

type ActionDispatch = Dispatch<Action>;
type BasketState = basketItem[];
export const BasketStateContext = createContext<BasketState | null>(null);
export const BasketDispatchContext = createContext<ActionDispatch | null>(null);

function reducer(state: basketItem[], action: Action): BasketState {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!state.find(data => data.idx === action.item.idx)) {
        const addData = [...state, action.item];
        localStorage.setItem('shopping-basket', JSON.stringify(addData));
        return addData;
      }
      return state;
    case 'DELETE_ITEM':
      const deleteData = [...state];
      deleteData.splice(
        deleteData.findIndex(v => v.idx === action.item.idx),
        1,
      );
      localStorage.setItem('shopping-basket', JSON.stringify(deleteData));
      return deleteData;
    case 'CHANGE_COUNT':
      const changeData = state.map(item => {
        if (item.idx === action.item.idx) {
          return { ...item, count: action.item.count };
        }
        return item;
      });
      localStorage.setItem('shopping-basket', JSON.stringify(changeData));
      return changeData;
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
