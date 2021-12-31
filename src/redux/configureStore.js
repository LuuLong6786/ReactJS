import { createStore, combineReducers } from "redux";

import { Dishes } from "../redux/dishes";
import { Leaders } from "../redux/leaders";
import { Comments } from "../redux/comments";
import { Promotions } from "../redux/promotions";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    })
  );
  return store;
};
