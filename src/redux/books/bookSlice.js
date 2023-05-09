import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Hk0o0gzOZgxDMYYQLCwI';

export const fetchBooks = createAsyncThunk('books/get', async () => {
  const arr = await fetch(`${apiUrl}/books`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());

  return arr;
});

export const createBook = createAsyncThunk('books/add', async (obj) => {
  const book = await fetch(`${apiUrl}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  }).then((res) => res.json());

  return book;
});

export const deleteBook = createAsyncThunk('books/remove', async (id) => {
  const book = await fetch(`${apiUrl}/books/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());

  return book;
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
    //
    builder.addCase(createBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createBook.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    //
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
