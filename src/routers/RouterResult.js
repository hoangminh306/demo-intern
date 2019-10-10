import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SearchResultLayout from "../layout/SearchResultLayout";
import resultRoute from '../routes/result.routes';

class RouterResult extends Component {
    render() {
        return (
            <SearchResultLayout>
                <Switch>
                    {resultRoute.map((route, index) => {
                        return (
                            <Route {...this.props}
                              path={route.path}
                              component={route.component}
                              key={index}
                              exact={route.exact}
                            />
                          ); 
                    })}
                </Switch>
            </SearchResultLayout>
        );
    }
}

export default RouterResult;