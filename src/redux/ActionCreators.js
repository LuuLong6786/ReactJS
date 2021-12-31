import * as ActionTypes from "../redux/ActionTypes"; //Lấy tất cả export from ActionTypes

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
