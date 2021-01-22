import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Nav from './Nav';
import Tasks from './Tasks';
import About from './About';
import Contacts from './Contacts';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

class App extends Component {

    state= {
        tasks: [
            {task: 'My First Task'}
        ]
    }

    render() {
        return(
            <Router>
                <div className='App'>
                    <Nav />
                        
                    <Switch>
                    <Route path='/About'>
                        <About />
                    </Route>
                    <Route path='/Tasks'>
                        <Tasks />
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
