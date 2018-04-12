import React from 'react';
import ReactDom from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './App';
import About from './About';
import Inbox from './Inbox';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render((
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/about' component={About}/>
            <Route path='/inbox' component={Inbox}/>
        </Switch>
    </Router>
    ), document.getElementById('root'));

registerServiceWorker();
