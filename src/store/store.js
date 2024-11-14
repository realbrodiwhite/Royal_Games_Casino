import { configureStore } from "@reduxjs/toolkit";
import lobbySlice from "../../app/lobbySlice";

const store = configureStore({
  reducer: {
    lobby: lobbySlice.reducer,
  },
});

export default store;
