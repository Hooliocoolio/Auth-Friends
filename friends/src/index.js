import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import Auth from './conn/auth';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Login from './com/Login';
import Profile from './com/Profile';
import './index.css';

 

function App() {
  return  (
    <div className="App" style={{ padding: 30 }} >
    <div>
    <Link to = "/">Login</Link>
    <Link to = "/profile">Profile</Link>
    </div>
    <Route exact path="/" component={Login} />
    <Route exact path="/profile" component={Profile} />

    </div>
  )

}

const rootElement = document.getElementById('root');
ReactDOM.render(
<BrowserRouter>
<App /></BrowserRouter>, rootElement);

// ReactDOM.render(
 
//     <App />,
 
//   document.getElementById('root')
// );

