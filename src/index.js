import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux';
import store, { history } from './store'
import App from './App'
import * as bookActions from './actions/bookActions';



ReactDOM.render(<Provider store={store}>
                    <ConnectedRouter history={history}>
                    <div>
                        <App />
                    </div>
                    </ConnectedRouter>
                </Provider>, 
document.getElementById('root'))
store.dispatch(bookActions.fetchBooks());
registerServiceWorker();
