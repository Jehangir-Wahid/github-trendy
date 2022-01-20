import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import TrendingServer from "../../service/server"
import { DeveloperType, RepositoryType } from "../types";

export const getDevelopers = () => {
    return async (dispatch: Dispatch<Action>) => {
        TrendingServer.get("developers")
        .then((response) => {
            const developers: DeveloperType[] = response.data
            dispatch({
                type: ActionTypes.GET_DEVELOPERS,
                payload: developers,
            });
        })
        .catch((error) => {
            console.log(error)
        })
    };
};

export const getRepositories = () => {
    return (dispatch: Dispatch<Action>) => {
        TrendingServer.get("repositories")
        .then((response) => {
            const repositories: RepositoryType[] = response.data
            dispatch({
                type: ActionTypes.GET_REPOSITORIES,
                payload: repositories,
            });
        })
        .catch((error) => {
            console.log(error)
        })
    };
};
