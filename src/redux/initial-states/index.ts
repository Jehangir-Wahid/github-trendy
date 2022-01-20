const developer = {
    rank: 0,
    username: "",
    name: "",
    url: "",
    avatar: "",
    since: "",
    popularRepository: {
        repositoryName: "",
        description: "",
        url: "",
    }
}

export const developersInitialState = { data: [developer].flat() };

const repository = {
    rank: 0,
    username: "",
    repositoryName: "",
    url: "",
    description: "",
    language: "",
    languageColor: "",
    totalStars: 0,
    forks: 0,
    starsSince: 0,
    since: "",
    builtBy: [
        {
            username: "",
            url: "",
            avatar: "",
        }
    ]
}

export const repositoriesInitialState = { data: [repository].flat() }
