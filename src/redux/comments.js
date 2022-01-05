import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";
// 1 Reducer : nhận 1 action + state hiện tại -> trả về state mới[] ->
export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        // isLoading: false,
        errMess: null,
        comments: action.payload,
      };
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        // isLoading: false,
        errmess: action.payload,
        comments: [],
      };

    case ActionTypes.ADD_COMMENT: // Chia trường hợp để phân biệt các Action -> sẽ có nhiều case
      var comment = action.payload; //Tạo 1 bản sao của state và update, ko sửa trực tiếp trên state
      return { ...state, comments: state.comments.concat(comment) }; //Update state with concat()

    default:
      return state;
  }
};
