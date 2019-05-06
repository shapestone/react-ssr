import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

class SubPage extends React.Component {

    exampleMethod() {
        console.log('JS is running');
    }

    head() {
        return(
            <Helmet>
                <meta charSet="utf-8" />
                <title>My page title</title>
                <link rel="canonical" href="http://mysite.com/subpage" />
            </Helmet>
        )
    }

    render() {
        return(
            <div>
                {this.head()}
                <h1>
                    My Sub Page
                </h1>
                <p>
                    <NavLink to="/">Home</NavLink>
                </p>
                <button onClick={() => this.exampleMethod()}>Console log some text</button>
            </div>
        )
    }
}

export default SubPage;