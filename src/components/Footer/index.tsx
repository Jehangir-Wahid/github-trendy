import React from "react";
import {GitHub} from "../Icons";

export default () => {
    const footerMenu = [
        'Terms',
        'Privacy',
        'Security',
        'Status',
        'Docs',
        'Contact GitHub',
        'Pricing',
        'API',
        'Training',
        'Blog',
        'About'
    ]

    return (
        <>
            <footer className="site-footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column flex-lg-row flex-column-reverse  align-items-center small border-top border-dark-secondary py-10">
                                <div className="d-flex align-items-center mt-4 mt-lg-0 me-4">
                                    <GitHub className="me-2 text-muted"/>
                                    <span className="text-muted">© 2022 GitHub, Inc.</span>
                                </div>

                                <ul className="list-inline m-0 col-lg-9 d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-between mb-2 mb-lg-0">
                                    { footerMenu.map((item, index)=>{
                                        return (
                                            <li key={index} className="list-inline-item me-4">
                                                <a className="text-decoration-none" href="https://github.com">{item}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

