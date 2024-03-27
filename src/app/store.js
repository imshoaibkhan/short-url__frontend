import { configureStore } from "@reduxjs/toolkit";
import urlReducer from '../feature/shorturl/urlSlice'

export const store = configureStore({
    reducer: {
        url: urlReducer,
      },
  })