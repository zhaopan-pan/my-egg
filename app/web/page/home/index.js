import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Layout from '../../component/layout.jsx';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { AppContainer } from 'react-hot-loader';//局部热更新
import './index.css';
import App from './components';
import { Provider } from 'react-redux'
import { create } from './components/store';
import routes from './components/router'


const clientRender = () => {
    const store = create(window.__INITIAL_STATE__);
    const url = store.getState().url;
    console.log('>>>url', url);
    const Entry = () => (<div>
        <Provider store={store}>
            <BrowserRouter>
                <App url={url} />
            </BrowserRouter>
        </Provider>
    </div>
    );
    const render = Page => {
        ReactDOM.hydrate(EASY_ENV_IS_DEV ? <AppContainer><Page /></AppContainer> : <Page />, document.getElementById('app'));
    };
    if (EASY_ENV_IS_DEV && module.hot) {
        module.hot.accept();
    }
    render(Entry);
    // import('service-worker-register').then(sw => {
    //     sw.default.register('service-worker.js');
    // });

};

const serverRender = (context, options) => {
    const url = context.state.url;
    console.log('>>>>routes', routes);
    console.log('>>>>url', url);
    const branch = matchRoutes(routes, url);
    const promises = branch.map(({ route }) => {
        const fetch = route.component.fetch;
        return fetch instanceof Function ? fetch() : Promise.resolve(null)
    });
    return Promise.all(promises).then(data => {
        console.log(data)
        const initState = context.state;
        data.forEach(item => {
            Object.assign(initState, item);
        });
        context.state = Object.assign({}, context.state, initState);
        console.log("context",context)
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
export default EASY_ENV_IS_NODE ? serverRender : clientRender();
