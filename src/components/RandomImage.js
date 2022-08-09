import { useDispatch, useSelector } from "react-redux";
import { generateImage } from "../actions";

const RandomImage = (props) => {
  const { url, error } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={url} alt="no-image" />
      {error && <p>{error}</p>}
      <button
        onClick={() => {
          dispatch(generateImage());
        }}
      >
        Click to generate image
      </button>
    </div>
  );
};

export default RandomImage;
