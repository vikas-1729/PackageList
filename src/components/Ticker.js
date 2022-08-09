import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, RANDOM } from "../actions/action_type";

const Ticker = (props) => {
  const counter = useSelector((state) => state.ticker.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          dispatch({
            type: INCREMENT,
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: DECREMENT,
          });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({
            type: RANDOM,
            payload: {
              newCounter: Math.floor(Math.random(2, 10) * 10),
            },
          });
        }}
      >
        Random
      </button>
    </div>
  );
};

export default Ticker;
