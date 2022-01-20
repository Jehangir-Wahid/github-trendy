import { ActionTypes } from "../action-types"
import { DeveloperType, RepositoryType } from "../types"

interface GetDevelopers {
    type: ActionTypes.GET_DEVELOPERS,
    payload: DeveloperType[],
}

interface GetRepositories {
    type: ActionTypes.GET_REPOSITORIES,
    payload: RepositoryType[],
}

interface SetIsLoading {
    type: ActionTypes.SET_IS_LOADING,
    payload: boolean,
}

export type Action = GetDevelopers | GetRepositories | SetIsLoading