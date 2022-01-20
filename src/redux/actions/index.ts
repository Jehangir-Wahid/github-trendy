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

export type Action = GetDevelopers | GetRepositories