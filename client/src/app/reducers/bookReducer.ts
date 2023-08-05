import { BookReducerState } from '../../shared/config/types';
import { createSlice } from '@reduxjs/toolkit';
import { FilterType } from '../../shared/config/enums';
import { PayloadAction } from '@reduxjs/toolkit';
const initialState: BookReducerState = {
  filterType: FilterType.All,
  searchQuery: [],
};

const bookSlice = createSlice({
  name: 'bookReducer',
  initialState,
  reducers: {
    filterBooks: (state, action: PayloadAction<FilterType>) => {
      state.filterType = action.payload;
    },
    searchBooks: (state, action: PayloadAction<Array<string>>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { filterBooks, searchBooks } = bookSlice.actions;
const bookReducer = bookSlice.reducer;
export default bookReducer;
