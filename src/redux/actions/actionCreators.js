import actionNames from "./actionNames";

export const getDataArray = (data) => {
  return (dispatch) => {
    return dispatch({
      type: actionNames.FILL,
      data: data
    });
  };
};



export const handleSubmit = (text, event) => {
  event.preventDefault();
  return (dispatch) => {
    return dispatch({
      type: actionNames.ADD,
      text: text,
    });
  };
};

