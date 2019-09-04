import React, { Component } from 'react';
import { Route, HashRouter, Switch, Redirect,BrowserRouter } from 'react-router-dom';
import Test from './test'

class ZpRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/list" component={Test} />
                    </Switch>
                </BrowserRouter>
            </div>);
    }
}

export default ZpRouter;
