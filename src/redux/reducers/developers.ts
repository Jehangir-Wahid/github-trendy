import {DevelopersType} from "../types";
import {developersInitialState} from "../initial-states";
import {Action} from "../actions";
import {ActionTypes} from "../action-types";

export default (state: DevelopersType = developersInitialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_DEVELOPERS:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}