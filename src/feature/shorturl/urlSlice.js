// urlSlice.js
import { createSlice, createAsyncThunk, createAction  } from "@reduxjs/toolkit";
import axios from "axios";

export const generateShortUrl = createAsyncThunk(
  "url/generateShortUrl",
  async (longUrl, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://shorturl-backend-fm3i.onrender.com", { originalUrl: longUrl });
      return response.data.shortUrl;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const clearUrl = createAction("url/clearUrl");

const urlSlice = createSlice({
  name: "url",
  initialState: {
    loading: false,
    shortUrl: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateShortUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(generateShortUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.shortUrl = action.payload;
      })
      .addCase(generateShortUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(clearUrl, (state) => {
        state.loading = false;
        state.shortUrl = null;
        state.error = null;
      });
  },
});

export default urlSlice.reducer;