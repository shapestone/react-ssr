import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

class Home extends React.Component {

    exampleMethod() {
        console.log('JS is running');
    }

    head() {
        return(
            <Helmet>
                <meta charSet="utf-8" />
                <title>My page title</title>
                <link rel="canonical" href="http://mysite.com/" />
            </Helmet>
        )
    }

    render() {
        return(
            <div>
                {this.head()}
                <h1>
                    My Home Page
                </h1>
                <p>
                    <NavLink to="/subpage">Subpage</NavLink>
                </p>
                <button onClick={() => this.exampleMethod()}>Console log some text</button>
            </div>
        )
    }
}

export default Home;