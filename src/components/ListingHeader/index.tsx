import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const ListingHeader = () => {
    const [isRepositoryPage, setIsRepository] = useState(true)

    useEffect(() => {
        setIsRepository(window.location.pathname === "/" ? true : false)
    }, [window.location.pathname]);
    
    return (
        <div className="card-header bg-dark-secondary border-dark-secondary p-4">
            <div className="row flex-column flex-lg-row align-items-center">
                <div className="col">
                    <div className="text-white">
                        <nav className="nav">
                            <NavLink
                                className={({isActive}) => {
                                    console.log(isActive)
                                    const linkClasses = 'small nav-link px-4 py-1 d-flex align-items-center border rounded-start';
                                    const activeClasses = `${linkClasses} border-primary bg-primary text-white`;
                                    const inActiveClasses = `${linkClasses} text-light-secondary border-dark-secondary`;
                                    return isActive ? activeClasses : inActiveClasses;
                                }}
                                to="/">Repositories</NavLink>
                            <NavLink
                                className={({isActive}) => {
                                    const linkClasses = 'small nav-link px-4 py-1 d-flex align-items-center border rounded-end border-start-0';
                                    const activeClasses = `${linkClasses} border-primary bg-primary text-white`;
                                    const inActiveClasses = `${linkClasses} text-light-secondary border-dark-secondary`;
                                    return isActive ? activeClasses : inActiveClasses;
                                }}
                                to="/developers">Developers</NavLink>
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
