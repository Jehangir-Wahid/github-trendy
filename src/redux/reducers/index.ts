import { combineReducers } from "redux";
import developers from './developers'
import repositories from './repositories'
import general from "./general";

const reducers = combineReducers({
    developers,
    repositories,
    general,
});

export default reducers;

export type State = ReturnType<typeof reducers>;