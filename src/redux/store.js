import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import rootReducer from "./reducers/";

const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== "development"
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, logger)
);
export default store;

