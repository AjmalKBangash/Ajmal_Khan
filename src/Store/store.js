import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const showFavourites = createAction("props_from_depart_actions");
export const favoritesRefreshState = createAction(
  "props_from_favouroites_refresh"
);
export const showNav = createAction("show_navigation");
export const activeNavLink = createAction("active_navlink");

const initialState = {
  showFavourites: false,
  favoritesRefreshState: 0,
  showNav: false,
  activeNavLink: "home",
};

const sliceReducer = createReducer(initialState, (builder) => {
  builder.addCase(showFavourites, (state, action) => {
    state.showFavourites = action.payload;
  });
  builder.addCase(favoritesRefreshState, (state, action) => {
    state.favoritesRefreshState = action.payload;
  });
  builder.addCase(showNav, (state, action) => {
    state.showNav = action.payload;
  });
  builder.addCase(activeNavLink, (state, action) => {
    state.activeNavLink = action.payload;
  });
});

export const store = configureStore({ reducer: sliceReducer });

export default store;
