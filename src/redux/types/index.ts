export interface DeveloperType {
    rank: number,
    username: string,
    name: string,
    url: string,
    avatar: string,
    since: string,
    popularRepository: {
        repositoryName: string,
        description: string,
        url: string,
    };
}

export interface DevelopersType {
    data: Array<DeveloperType>
}

export interface RepositoryType {
    rank: number,
    username: string,
    repositoryName: string,
    url: string,
    description: string,
    language: string,
    languageColor: string,
    totalStars: number,
    forks: number,
    starsSince: number,
    since: string,
    builtBy: Array<RepositoryDevelopersType>
}

export interface RepositoriesType {
    data: Array<RepositoryType>
}

interface RepositoryDevelopersType {
    username: string,
    url: string,
    avatar: string,
}
