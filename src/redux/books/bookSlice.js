import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [], // empty array
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const arr = [...state.books];
      arr.push({ ...payload, id: uuidv4() });
      return { ...state, books: arr };
    },
    remove: (state, { payload }) => {
      const filtered = state.books.filter((book) => book.id !== payload);
      return { ...state, books: filtered };
    },
  },
});

export const { add, remove } = bookSlice.actions;

export default bookSlice.reducer;
