import { useDispatch, useSelector } from "react-redux";
import { deleteFavPackage } from "../actions";

const PackageList = (props) => {
  const { packageList: packageListArray } = useSelector(
    (state) => state.favouritePackage
  );
  const dispatch = useDispatch();
  console.log("aa", packageListArray);
  return (
    <div>
      <h1>Package List</h1>
      {packageListArray.map((item) => {
        return (
          <div key={item.name}>
            <h1>{item.name}</h1>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteFavPackage(item.name));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PackageList;
