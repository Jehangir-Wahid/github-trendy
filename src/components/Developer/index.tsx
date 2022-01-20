import React from "react";
import {DeveloperType} from "../../redux/types";
import {Fire, Heart, Repo} from "../Icons";

const Developer: React.FC<DeveloperType> = ({
        rank,
        username,
        name,
        url,
        avatar,
        popularRepository,
    }) => {
    return (
        <>
            <article className="d-flex text-secondary border-bottom border-dark-secondary p-4">
                <span className="text-muted small">
                    {rank}
                </span>
                <div className="mx-4">
                    <a href={url}>
                        <img
                            className="rounded-circle"
                            src={avatar}
                            alt={"@" + username}
                            width="48"
                            height="48"
                        />
                    </a>
                </div>

                <div className="row flex-grow-1">
                    <div className="col-sm-8 d-md-flex">
                        <div className="col-md-6">
                            <h5 className="mb-0 fw-bold">
                                <a href={url} className="text-decoration-none">{name}</a>
                            </h5>

                            <p className="f4 text-normal mb-1">
                                <a href={url} className="text-decoration-none text-secondary">
                                    {username}
                                </a>
                            </p>
                        </div>

                        <div className="col-md-6 mt-2 mb-3 my-md-0">

                            <div className="d-flex align-items-center">
                                <Fire className="me-2 text-fire"/>
                                <span className="text-muted fs-6 text-uppercase">Popular repo</span>
                            </div>

                            {popularRepository.url && (
                                <div className="d-flex align-items-center">
                                    <a
                                        href={popularRepository.url}
                                        className="text-decoration-none"
                                    >
                                        <Repo className="me-2 text-muted"/>
                                        <span className="fw-bold">{popularRepository.repositoryName}</span>
                                    </a>
                                </div>
                            )}

                            {popularRepository.description && (
                                <p className="fs-6 text-muted mt-1">
                                    {popularRepository.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-md-end">
                        <div className="me-2 fs-6">
                            <a
                                href="#"
                                className="d-flex align-items-center text-decoration-none btn-sm btn-outline-secondary rounded bg-dark-mild border border-dark-secondary text-light-secondary"
                            >
                                <Heart className="text-pink me-2 icon-sponsor"/>
                                <span className="small">Sponsor</span>
                            </a>
                        </div>
                        <div className="fs-6">
                            <a
                                href="#"
                                className="d-flex align-items-center text-decoration-none btn-sm btn-outline-secondary rounded bg-dark-mild border border-dark-secondary text-light-secondary"
                            >
                                <span className="small">Follow</span>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Developer;
