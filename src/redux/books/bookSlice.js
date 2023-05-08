import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      progress: 0,
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      progress: 0,
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      progress: 0,
    },
  ],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const arr = [...state.books];
      arr.push({ ...payload, item_id: uuidv4() });
      return { ...state, books: arr };
    },
    remove: (state, { payload }) => {
      const filtered = state.books.filter((book) => book.item_id !== payload);
      return { ...state, books: filtered };
    },
  },
});

export const { add, remove } = bookSlice.actions;

export default bookSlice.reducer;
