import * as types from "../types";

const initialState = {
  posts: [],
  users: [],
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
      case types.SHOW_USER:
        return {
          ...state,
          users: [...action.payload]
        }
    default:
      return state;
  }
};
