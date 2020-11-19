import React from 'react';
import ReactDOM from 'react-dom';
import './main.global.css';
import App from './containers/App';
import {Provider} from "react-redux";
import store from './store/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <small className='text'>App created with React Redux and Webpack</small>
          <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


