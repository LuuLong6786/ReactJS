import * as ActionTypes from "../redux/ActionTypes"; //Lấy tất cả export from ActionTypes
import { DISHES } from "../shared/dishes";

//Create a Action by name: addComment,  for using anywhere. Action is a pure object with Type and Payload (gia tri tham so ma action creator truyen len)
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT, // Type is Required - để phân biệt được các Action

  payload: {
    //?
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
//Thunk: Tra ve 1 ham
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});
export const dishesFailed = (errMess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess,
});
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});
