import { ERROR, GENERATEIMAGE } from "./action_type";

function generateImageAction(url) {
  return {
    type: GENERATEIMAGE,
    payload: {
      url: url,
    },
  };
}

function handleFailure(err) {
  return {
    type: ERROR,
    payload: {
      mssg: ERROR,
    },
  };
}

export function generateImage() {
  return (dispatch) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(generateImageAction(data.message));
      })
      .catch((err) => {
        dispatch(handleFailure(err));
      });
  };
}
