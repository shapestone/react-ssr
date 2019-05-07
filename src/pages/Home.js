import React, {useEffect, useState} from "react";
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

function Home() {
    const [counter, setCounter] = useState(0);

    const handleCounterEvent = e => {
        let value = counter;
        value += 1;
        setCounter(value);
    };

    const head = () => {
        return(
            <Helmet>
                <meta charSet="utf-8" />
                <title>My page title</title>
                <link rel="canonical" href="http://mysite.com/" />
            </Helmet>
        )
    };

    return (
        <div>
            {head()}
            <h1>
                My Home Page
            </h1>
            <p>
                Counter: {counter}
            </p>
            <p>
                <NavLink to="/subpage">Subpage</NavLink>
            </p>
            <button onClick={handleCounterEvent}>Console log some text</button>
        </div>
    );
}

export default Home;