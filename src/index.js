import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './components/Dashboard';
import users from './user.json';

ReactDOM.render(<Dashboard users={users} />, document.getElementById('root'));
