import { combineReducers } from "redux";
import developers from './developers'
import repositories from './repositories'

const reducers = combineReducers({
    developers,
    repositories,
});

export default reducers;

export type State = ReturnType<typeof reducers>;