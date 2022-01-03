import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Dishes } from "../redux/dishes";
import { Leaders } from "../redux/leaders";
import { Comments } from "../redux/comments";
import { Promotions } from "../redux/promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({ feedback: InitialFeedback }),
    }), // even if reload component, the form state will remain//
    applyMiddleware(thunk, logger)
  );
  return store;
};
