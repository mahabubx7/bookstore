import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      id: uuidv4(),
      name: 'Learn Modern React',
      author: 'John Doe',
      progress: 80,
      category: 'web-development',
    },
  ],
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
