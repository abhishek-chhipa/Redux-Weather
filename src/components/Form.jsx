// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdatePlace, UpdatePlaceData } from "../actions";

const Form = () => {
  const place = useSelector((state) => state.place);
  const theme = useSelector((state) => state.thene);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            placeholder="enter a city"
            value={place}
            onChange={(e) => {
              dispatch(UpdatePlace(e.target.value));
            }}
          />
          <button
            className={(theme) ? ("btn btn-light") : ("btn btn-dark")}
            onClick={() => {
              dispatch(UpdatePlaceData(place));
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
