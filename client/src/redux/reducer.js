import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice.js";
import themeSlice from "./theme";
import postSlice from "./postSlice";

const rootReducer = combineReducers({
  user: userSlice,
  theme: themeSlice,
  posts: postSlice,
});

export { rootReducer };