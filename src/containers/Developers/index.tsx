import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {getDevelopers, setIsLoading} from "../../redux/action-creators";
import Developer from "../../components/Developer";

export default () => {
    const developers = useSelector((state: State) => state.developers.data);
    const dispatch = useDispatch()

    useEffect(() => {
        if (developers.length <= 1) {
            dispatch(setIsLoading(true))
        }
        dispatch(getDevelopers());
    }, []);

    return (
        <>
            {
                developers.map(
                    (
                        {
                            rank,
                            username,
                            name,
                            url,
                            avatar,
                            since,
                            popularRepository,
                        },
                        index
                    ) => (
                        <Developer
                            key={index}
                            rank={rank}
                            username={username}
                            name={name}
                            url={url}
                            avatar={avatar}
                            since={since}
                            popularRepository={popularRepository}
                        />
                    )
                )
            }
        </>
    );
};
