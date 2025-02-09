import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { storage } from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
// import storage from "redux-persist/lib/storage";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
