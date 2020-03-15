import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";

import rootReducer from "./reducers/";

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? applyMiddleware(logger)
    : []
);
export default store;

