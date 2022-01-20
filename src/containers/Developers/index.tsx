import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import { getDevelopers } from "../../redux/action-creators";
import Developer from "../../components/Developer";
import ListingHeader from "../../components/ListingHeader";
import Spinner from "../../components/Spinner";

export default () => {
    const developers = useSelector((state: State) => state.developers.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDevelopers());
    }, []);

    return (
        <div className="card border-dark-secondary">
            <ListingHeader isRepositoryPage={false} />
            <div className="card-body p-0 bg-dark">
                {developers.length <= 1 ? (
                    <Spinner />
                ) : (
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
                )}
            </div>
        </div>
    );
};
