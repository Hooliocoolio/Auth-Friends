import React from 'react'; 
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateList';

function App () {
    retutn (
        <Router>
            <div className='App'>
                <Switch>
                    <PrivateRoute exact path='/friendlist' component={FriendList} />
                    <Route exact path='./login' render={() => <Login />} />
                    <Route component={Login} />

                </Switch>
            </div>
        </Router>
    )
}