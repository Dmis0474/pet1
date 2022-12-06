import actionNames from "../actions/actionNames";
import { handleSubmit } from "../actions/actionCreators";

const initialState = {
  allPosts: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FILL":
      return {
        ...state,
        allPosts: action.data
      };

    case "ADD":
      return {
        ...state,
        allPosts: [
          {
            id: Math.random().toString(16).slice(2),
            author: action.text,
            width:5000,
            height:3333,
            download_url: 'https://vsememy.ru/wp-content/uploads/2022/10/97ea874df47b3150617dd639b13b535f.jpg',
          },
          ...state.allPosts,
        ],
      };
    default:
      return state;
  }
};
