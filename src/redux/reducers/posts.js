import actionNames from "../actions/actionNames";
import {handleSubmit} from "../actions/actionCreators";

const initialState = {
  allPosts: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        allPosts: [
          ...state.allPosts,
          {
            text: action.text,
            id: Math.random().toString(16).slice(2),
          },
        ],
      };
    default:
      return state;
  }
};
