import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const showFavourites = createAction("props_from_depart_actions");

const initialState = {
  showFavourites: false,
};

const sliceReducer = createReducer(initialState, (builder) => {
  builder.addCase(showFavourites, (state, action) => {
    state.showFavourites = action.payload;
  });
});

export const store = configureStore({ reducer: sliceReducer });

export default store;
