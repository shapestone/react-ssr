import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

function SubPage() {

    const exampleMethod = () => {
        console.log('JS is running');
    };

    const head = () => {
        return(
            <Helmet>
                <meta charSet="utf-8" />
                <title>My page title</title>
                <link rel="canonical" href="http://mysite.com/subpage" />
            </Helmet>
        )
    };

    return(
        <div>
            {head()}
            <h1>
                My Sub Page
            </h1>
            <p>
                <NavLink to="/">Home</NavLink>
            </p>
            <button onClick={() => exampleMethod()}>Console log some text</button>
        </div>
    )
}

export default SubPage;