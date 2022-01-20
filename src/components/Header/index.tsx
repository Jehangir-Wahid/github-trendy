import React from "react";

export default () => {
    return (
        <header className="site-header text-center text-white bg-dark-secondary py-10 border-bottom border-dark-secondary">
            <h2 className="fw-bold"><b>Trending</b></h2>
            <p className="mb-3 text-secondary">
                {(window.location.pathname == "/"
                    ? "See what the GitHub community is most excited about today."
                    : "These are the developers building the hot tools today."
                )}
            </p>
        </header>
    );
};

