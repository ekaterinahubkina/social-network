import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import messagesSlice from "./messagesSlice";
import profileSlice from "./profileSlice";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    messagesPage: messagesReducer,
  },
});

export default store;
