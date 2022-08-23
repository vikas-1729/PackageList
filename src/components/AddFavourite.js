import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavPackage, searchResult } from "../actions";
import { MAX_NO } from "../helper/url";

const AddFavourite = (props) => {
  const [packageName, setPackageName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [packageText, setPackageText] = useState("");
  const { data, error, inProgress } = useSelector((state) => state.searchData);
  const dispatch = useDispatch();
  const max_no = MAX_NO;
  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(searchResult(searchQuery.trim()));
    }
  }, [searchQuery]);
  handleSubmit = (e) => {
    e.preventDefault();
    //conditions --like text -empty
    dispatch(addFavPackage({ name: packageName, text: packageText }));
  };
  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      {error && <div>Not Found</div>}
      {data.results &&
        data["results"].map((item, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="packageName"
                id={item.package.name}
                value={item.package.name}
                onClick={() => {
                  setPackageName(item.package.name);
                }}
              />
              <label htmlFor={item.package.name}> {item.package.name} </label>
              <br></br>
            </div>
          );
        })}
      <textarea
        name="packageText"
        value={packageText}
        onChange={(e) => {
          setPackageText(e.target.value);
        }}
      />
      <input
        type="submit"
        name="submit"
        value="Add Package"
        onClick={(e) => {
          handleSubmit(e);
        }}
      />
    </div>
  );
};

export default AddFavourite;
