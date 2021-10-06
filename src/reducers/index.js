import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import ThemeReducer from "./themeReducer";


const rootReducer = combineReducers({
    place: placeReducer,
    placeData: placeDataReducer,
    theme:ThemeReducer
});

export default rootReducer;
