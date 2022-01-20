import React from "react";
import { Link } from "react-router-dom";

interface Iprops {
    isRepositoryPage: boolean;
}

const ListingHeader: React.FC<Iprops> = ({ isRepositoryPage }) => {
    return (
        <div className="card-header bg-dark-secondary border-dark-secondary p-4">
            <div className="row flex-column flex-lg-row align-items-center">
                <div className="col">
                    <div className="text-white">
                        <nav className="nav">
                            <Link
                                className={
                                    "nav-link fw-bold px-4 py-1 d-flex align-items-center border border-dark-secondary rounded-start text-light-secondary" +
                                    (isRepositoryPage
                                        ? " border-primary bg-primary text-white"
                                        : "")
                                }
                                to="/"
                            >
                                Repositories
                            </Link>
                            <Link
                                className={
                                    "nav-link fw-bold px-4 py-1 d-flex align-items-center border border-dark-secondary border-start-0 rounded-end text-light-secondary" +
                                    (!isRepositoryPage
                                        ? " border-primary bg-primary text-white"
                                        : "")
                                }
                                to="/developers"
                            >
                                Developers
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex flex-column flex-lg-row medium mt-4 mt-lg-0 justify-content-end">
                        {isRepositoryPage ? (
                            <div className="dropdown mb-4 mb-lg-0">
                                <a
                                    className="dropdown-toggle d-flex align-items-center dropdown-toggle text-decoration-none text-secondary mx-3"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Spoken Language:
                                    <strong className="ms-1">Any</strong>
                                </a>
                                <ul
                                    className="dropdown-menu bg-dark border border-dark-secondary"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li key="1" className="border-0 border-bottom border-dark-secondary">
                                        <a className="dropdown-item text-muted small" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li key="2" className="border-0 border-bottom border-dark-secondary">
                                        <a className="dropdown-item text-muted small" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li key="3" className="border-0 border-dark-secondary">
                                        <a className="dropdown-item text-muted small" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : null}

                        <div className="dropdown mb-4 mb-lg-0">
                            <a
                                className="dropdown-toggle d-flex align-items-center dropdown-toggle text-decoration-none text-secondary mx-4"
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Language:
                                <strong className="ms-1">Any</strong>
                            </a>
                            <ul
                                className="dropdown-menu bg-dark border border-dark-secondary"
                                aria-labelledby="dropdownMenuLink"
                            >
                                <li key="1" className="border-0 border-bottom border-dark-secondary">
                                    <a className="dropdown-item text-muted small" href="#">
                                        Action
                                    </a>
                                </li>
                                <li key="2" className="border-0 border-bottom border-dark-secondary">
                                    <a className="dropdown-item text-muted small" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li key="3" className="border-0 border-dark-secondary">
                                    <a className="dropdown-item text-muted small" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a
                                className="dropdown-toggle d-flex align-items-center dropdown-toggle text-decoration-none text-secondary mx-3"
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Date Range:
                                <strong className="ms-1">Today</strong>
                            </a>
                            <ul
                                className="dropdown-menu bg-dark border border-dark-secondary"
                                aria-labelledby="dropdownMenuLink"
                            >
                                <li key="1" className="border-0 border-bottom border-dark-secondary">
                                    <a className="dropdown-item text-muted small" href="#">
                                        Action
                                    </a>
                                </li>
                                <li key="2" className="border-0 border-bottom border-dark-secondary">
                                    <a className="dropdown-item text-muted small" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li key="3" className="border-0 border-dark-secondary">
                                    <a className="dropdown-item text-muted small" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingHeader;
