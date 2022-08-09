import { DECREMENT, INCREMENT, RANDOM } from "../actions/action_type";

let initialState = {
  counter: 0,
};

export function tickerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case RANDOM: {
      return {
        ...state,
        counter: action.payload.newCounter,
      };
    }
    default:
      return state;
  }
}
