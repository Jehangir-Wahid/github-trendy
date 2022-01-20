import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {getRepositories, setIsLoading} from "../../redux/action-creators";
import Repository from "../../components/Repository";

export default () => {
    const repositories = useSelector((state: State) => state.repositories.data);
    const dispatch = useDispatch()

    useEffect(() => {
        if (repositories.length <= 1) {
            dispatch(setIsLoading(true))
        }
        dispatch(getRepositories());
    }, []);
    return (
        <>
            {
                repositories.map(
                    (
                        {
                            rank,
                            username,
                            repositoryName,
                            url,
                            description,
                            language,
                            languageColor,
                            totalStars,
                            forks,
                            starsSince,
                            since,
                            builtBy,
                        },
                        index
                    ) => (
                        <Repository
                            key={index}
                            rank={rank}
                            username={username}
                            repositoryName={repositoryName}
                            url={url}
                            description={description}
                            language={language}
                            languageColor={languageColor}
                            totalStars={totalStars}
                            forks={forks}
                            starsSince={starsSince}
                            since={since}
                            builtBy={builtBy}
                        />
                    )
                )
            }

        </>

    );
};

