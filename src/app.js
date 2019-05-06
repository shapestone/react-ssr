import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/Home';
import SubPage from './pages/SubPage';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={props => (
                    <Home {...props} />
                )} />
                <Route exact path="/subpage" render={props => (
                    <SubPage {...props} />
                )} />
            </Switch>
        )
    }
}

export default App;