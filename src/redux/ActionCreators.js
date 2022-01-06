import * as ActionTypes from "../redux/ActionTypes"; //Lấy tất cả export from ActionTypes
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

//Create a Action by name: addComment,  for using anywhere. Action is a pure object with Type and Payload (gia tri tham so ma action creator truyen len)
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT, // Type is Required - để phân biệt được các Action
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newComment.date = new Date().toISOString();
  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("Post comments", error.message);
      alert("Your comment could not be post\nError: " + error.message);
    });
};
//Thunk: Tra ve 1 ham
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  // setTimeout(() => {
  //   dispatch(addDishes(DISHES));
  // }, 2000);
  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addDishes(response)))
    .catch((error) => dispatch(dishesFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        //trường hợp máy chủ không phản hổi
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});
export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
