import * as ActionTypes from "../redux/ActionTypes"; //Lấy tất cả export from ActionTypes
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

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
  // setTimeout(() => {
  //   dispatch(addDishes(DISHES));
  // }, 2000);
  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));
  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
