import React from "react";
import { DeveloperType } from "../redux/types";
import { Flame, Heart, Repo } from "./Icons"

const Developer: React.FC<DeveloperType> = ({
    rank,
    username,
    name,
    url,
    avatar,
    popularRepository,
}) => {
    return (
        <div>
            <article className="container repository text-secondary border-bottom border-dark-secondary p-4">
                <div className="row d-sm-flex flex-auto">
                    <div className="col-md-12 d-md-flex">
                        <div className="col-sm-8 d-md-flex">
                            <div className="col-md-7 d-md-flex">
                                <div className="col-md-3 d-sm-flex">
                                    <a href={"#pa-" + username} className="text-decoration-none text-muted small" style={{ width: "16px" }}>{rank}</a>
                                    <a href={url}>
                                        <img className="rounded-circle mx-3" src={avatar}  width="48"  height="48" alt={"@" + username}/>
                                    </a>
                                </div>
                                <div className="col-md-9 d-sm-flex">
                                    <span className="d-flex flex-column align-items-start m-0">
                                        <a href="" className="text-decoration-none"><h5><strong>{name}</strong></h5></a>
                                        <span className="text-muted">{username}</span>
                                    </span>
                                </div>
                            </div>

                            <div className="col-md-5 d-md-flex justify-content-left">
                                <span className="d-flex flex-column align-items-start">
                                    <span className="text-muted text-uppercase small">
                                        <Flame className="text-warning me-1 mb-1" fillRule="evenodd" />
                                        Popular repo
                                    </span>
                                    <a href="{popularRepository.url}" className="text-decoration-none text-truncate w-90 h6">
                                        <Repo className="text-muted me-2" />
                                        <b>{popularRepository.repositoryName}</b>
                                    </a>
                                    <div className="f6 color-fg-muted mt-1">
                                        {popularRepository.description}
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div className="col-sm-4 d-md-flex justify-content-end align-items-start">
                            <a href="#"  className="btn btn-sm btn-outline-secondary bg-dark-secondary border-dark-secondary rounded">
                                <Heart className="text-muted color-fg-sponsors icon-sponsor small" />
                                <span className="p-1 small">Sponser</span>
                            </a>
                            <span className="w-10">&nbsp;&nbsp;</span>
                            <a href="#"  className="btn btn-sm btn-outline-secondary bg-dark-secondary border-dark-secondary rounded">
                                <span className="small">Follow</span>
                            </a>

                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Developer;
