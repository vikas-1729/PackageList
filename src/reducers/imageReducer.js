import { ERROR, GENERATEIMAGE } from "../actions/action_type";

let initialState = {
  url: "",
  error: null,
};

export function imageReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATEIMAGE: {
      return {
        ...state,
        url: action.payload.url,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload.mssg,
      };
    }
    default: {
      return state;
    }
  }
}
