import React, { Component } from 'react';
import indexRoute from '../routes/index.routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class RouterIndex extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {indexRoute.map((route, index) => {
                        return (
                            <Route
                                path = {route.path}
                                exact = {route.exact}
                                component = {route.component}
                                key = {index}
                            />
                        )
                    })}
                </Switch>
            </Router>
        );
    }
}

export default RouterIndex;