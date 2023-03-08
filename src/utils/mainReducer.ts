import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { getTravelListAPI } from 'api/main';
import { RootState, AppDispatch } from 'utils/store';
import { Data } from 'types';

/* main action type */
const GET_TRAVLELIST = 'main/GET_TRAVLELIST';

const createMainAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
  extra: { data: Data[] };
}>();

/* main Thunk Action */
export const getTravalList = createAsyncThunk<Data[], void>(GET_TRAVLELIST, async () => {
  try {
    const { data } = await getTravelListAPI();
    return data;
  } catch (error) {
    return error as any;
  }
});

export interface MainSliceState {
  data: Data[];
  status: string;
  rejectValue: string;
}

interface Test extends PayloadAction {
  data?: Data[];
}

const initialState = {
  data: [],
  status: '',
  rejectValue: '',
} as MainSliceState;

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    /* getTodos Thunk Reducer */
    builder.addCase(getTravalList.pending, state => {
      console.log('LOADING');
      state.status = 'LOADING';
    });
    builder.addCase(getTravalList.fulfilled, (state, { payload: data }) => {
      console.log('COMPLETE');
      state.data = data;
      state.status = 'COMPLETE';
    });
    builder.addCase(getTravalList.rejected, (state, action) => {
      console.log('FAIL');
      console.log(action.error.message);
      state.status = 'FAIL';
      state.rejectValue = action.error.message || '';
    });
  },
});

export default mainSlice;
