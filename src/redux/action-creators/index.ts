import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import TrendingServer from "../../service/server"
import { DeveloperType, RepositoryType } from "../types";

export const getDevelopers = () => {
    return (dispatch: Dispatch<Action>) => {
        TrendingServer.get("developers")
        .then(async (response) => {
            const developers: DeveloperType[] = response.data
            await dispatch({
                type: ActionTypes.GET_DEVELOPERS,
                payload: developers,
            });
            dispatch({
                type: ActionTypes.SET_IS_LOADING,
                payload: false,
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
        .then(async (response) => {
            const repositories: RepositoryType[] = response.data
            await dispatch({
                type: ActionTypes.GET_REPOSITORIES,
                payload: repositories,
            });
            dispatch({
                type: ActionTypes.SET_IS_LOADING,
                payload: false,
            });
        })
        .catch((error) => {
            console.log(error)
        })
    };
};

export const setIsLoading = (isLoading: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SET_IS_LOADING,
            payload: isLoading,
        });
    };
};
