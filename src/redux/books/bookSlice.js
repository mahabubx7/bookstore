import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Hk0o0gzOZgxDMYYQLCwI';

export const fetchBooks = createAsyncThunk('books/get', async () => {
  const arr = axios.get(`${apiUrl}/books`);
  return (await arr).data;
});

export const createBook = createAsyncThunk('books/add', async (obj) => {
  const book = axios.post(`${apiUrl}/books`, obj);
  return (await book).data;
});

export const deleteBook = createAsyncThunk('books/remove', async (id) => {
  const book = axios.delete(`${apiUrl}/books/${id}`);
  return (await book).data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const arr = [...state.data];
      arr.push({ ...payload, progress: 80 });
      return { ...state, data: arr };
    },
    remove: (state, { payload }) => {
      const filtered = state.data.filter((book) => book.item_id !== payload);
      return { ...state, data: filtered };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = Object.entries(payload).flatMap(([key, value]) => value.map((book) => ({
        ...book, item_id: key, progress: 80,
      })));
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(createBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createBook.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(deleteBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteBook.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { add, remove } = bookSlice.actions;

export default bookSlice.reducer;
