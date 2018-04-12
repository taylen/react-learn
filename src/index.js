import React from 'react';
import ReactDom from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Inbox from './components/Inbox';
import './styles/index.css';
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
