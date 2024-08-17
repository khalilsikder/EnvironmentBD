import React from 'react';
import {Helmet} from "react-helmet";
const Icon = () => {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="icon" href="https://i.ibb.co/bH1Gph7/Govt.png" />
            </Helmet>
            ...
        </div>
    );
};

export default Icon;