import React from "react";
import { RepositoryType } from "../redux/types";
import { Fork, Repo, Star } from "./Icons";

const Repository: React.FC<RepositoryType> = ({
    username,
    repositoryName,
    url,
    description,
    language,
    languageColor,
    totalStars,
    forks,
    starsSince,
    builtBy,
}) => {
    return (
        <article className="repository text-secondary border-bottom border-dark-secondary p-4">
            <h5 className="d-flex align-items-center m-0 justify-content-between">
                <a href="" className="text-decoration-none">
                    <Repo className="text-muted me-2" />
                    {username} /{" "}<span className="">{repositoryName}</span>
                </a>
                <div className="js-toggler-container js-social-container starring-container BtnGroup d-flex">
                    <div className="unstarred js-social-form BtnGroup-parent flex-auto">
                        <button
                            aria-label="Star
                            this
                            repository"
                            type="submit"
                            className="btn btn-sm btn-outline-secondary bg-dark-secondary border rounded-0 rounded-start border-dark-secondary js-toggler-target rounded-left-2 BtnGroup-item"
                        >
                            <Star className="text-muted mx-1 align-text-bottom" />
                            <span className="d-none d-md-inline text-muted mx-1"> Star </span>
                        </button>
                    </div>
                    <details
                        id="details-6a4320"
                        className="details-reset details-overlay BtnGroup-parent js-user-list-menu d-inline-block position-relative"
                    >
                        <summary
                            aria-label="Add this repository to a list"
                            className="btn btn-sm btn-outline-secondary bg-dark-secondary border rounded-0 rounded-end border-dark-secondary border-start-0 BtnGroup-item px-2 float-none"
                            aria-haspopup="menu"
                            role="button"
                        >
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                className="octicon octicon-triangle-down text-muted"
                            >
                                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                            </svg>
                        </summary>
                    </details>
                </div>
            </h5>
            <p className="text-muted medium my-1 w-75">{description}</p>
            <div className="row align-items-center small text-muted mt-2">
                <div className="col d-flex flex-wrap align-items-center ">
                    <div className="me-4">
                        <span style={{ color: `${languageColor}` }}>{language}</span>
                    </div>
                    <a
                        href={url + "/stargazers"}
                        className="text-decoration-none d-flex align-items-center me-4 text-muted"
                    >
                        <Star className="text-muted me-1" />
                        {totalStars}
                    </a>

                    <a
                        href={url + "/network/members"}
                        className="text-decoration-none d-flex align-items-center me-4 text-muted"
                    >
                        <Fork className="text-muted me-1" />
                        {forks}
                    </a>

                    <span className="d-flex align-items-center me-4">
                        <span className="me-1">Built by</span>
                        {builtBy.map((developer, index) => (
                            <a
                                className="me-1"
                                key={index}
                                href={developer.url}
                            >
                                <img
                                    className="rounded-circle"
                                    src={developer.avatar}
                                    width="20"
                                    height="20"
                                    alt={developer.username}
                                />
                            </a>
                        ))}
                    </span>

                    <span className="d-flex align-items-center ms-lg-auto">
                        <Star className="text-muted me-1" />
                        <span>{starsSince} stars today</span>
                    </span>
                </div>
            </div>
        </article>
    );
};

export default Repository;
