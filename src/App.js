import React, { Component } from 'react';
import './App.css';
import Button from 'antd';
import Nav from './Nav';
import Tasks from './Tasks';
import Completed from './Completed';
import Contacts from './Contacts';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

class App extends Component {

    render() {
        return(
            <Router>
                <div className='App'>
                    <Nav />
                        
                    <Switch>
                    <Route path='/Tasks'>
                        <Tasks />
                    </Route>
                    <Route path='/Completed'>
                        <Completed />
                    </Route>
                    <Route path='/Contacts'>
                        <Contacts />
                    </Route>
                </Switch>    
                </div>

                
            </Router>
            
        )
    }
}

export default App;
