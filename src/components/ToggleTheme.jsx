import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

function ToggleTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className="toggle-theme">
      <button
        className={theme ? "btn btn-light" : "btn btn-dark"}
        onClick={() => {
            dispatch(toggleTheme())
        }}
      >
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default ToggleTheme;
