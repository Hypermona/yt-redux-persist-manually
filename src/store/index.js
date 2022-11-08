import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ users: userReducer }));

let store = configureStore({ reducer: persistedReducer });
let persistor = persistStore(store, { manualPersist: true });
export { store, persistor };
