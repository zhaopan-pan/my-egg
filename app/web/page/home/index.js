import React, { Component } from 'react';
import Layout from '../../component/layout.jsx';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
// import List from './componets/list';
import './index.css';
import App from './components';
import { Provider } from 'react-redux'
import { create } from './components/store';
import routes from './components/router'

const serverRender = (context, options) => {
    const url = context.state.url;
    console.log('>>>>url', url);
    const branch = matchRoutes(routes, url);
    const promises = branch.map(({ route }) => {
        const fetch = route.component.fetch;
        return fetch instanceof Function ? fetch() : Promise.resolve(null)
    });
    return Promise.all(promises).then(data => {
        const initState = context.state;
        data.forEach(item => {
            Object.assign(initState, item);
        });
        context.state = Object.assign({}, context.state, initState);
        const store = create(initState);
        return () => (
            <Layout>
                <div>
                    <Provider store={store}>
                        <StaticRouter location={url} context={{}}>
                            <App url={url} />
                        </StaticRouter>
                    </Provider>
                </div>
            </Layout>
        )
    });
};
export default serverRender;