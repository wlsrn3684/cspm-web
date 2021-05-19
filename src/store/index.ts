import { combineReducers } from "redux";
import toggleMenu from "./toggleMenu";

const rootReducer = combineReducers({
  toggleMenu,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
