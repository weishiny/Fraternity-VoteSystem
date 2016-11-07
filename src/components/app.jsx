import React from 'react'
import { render, unmountComponentAtNode  } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { match, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import root from './common/Root'
import store from '../store/store'

const mountNode = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store);
const renderApp = (RootComponent) => {
    render((
        <AppContainer>
            <RootComponent store={store} history={history} />
        </AppContainer>
    ), mountNode);
}

renderApp(root);

if (module.hot) {
    module.hot.accept('./common/Root', () => {
        const nextRoot = require('./common/Root').default;
        //use unmountComponentAtNode will lose state
        //unmountComponentAtNode(mountNode)
        renderApp(nextRoot);
    });
}