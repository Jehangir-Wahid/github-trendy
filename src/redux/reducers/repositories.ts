import {RepositoriesType} from "../types";
import {repositoriesInitialState} from "../initial-states";
import {Action} from "../actions";
import {ActionTypes} from "../action-types";

export default (state: RepositoriesType = repositoriesInitialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_REPOSITORIES:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}