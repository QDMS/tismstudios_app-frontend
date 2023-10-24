import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { serviceReducer } from "./reducers/serviceReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
    service: serviceReducer,
  },
});

export const server = "https://tismstudioapp-server.onrender.com/api/v1";
