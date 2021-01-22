import React, { Component } from 'react';
import './App.css';
import Button from 'antd';
import Nav from './Nav/Nav';
import Tasks from './Tasks/Tasks';
import Completed from './Completed/Completed';
import About from './Tasks/Tasks';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {

    render() {
        return(
            <router>
                <div className='App'>
                    <Nav />
                            
                </div>

                <switch>
                    <route path='/Tasks'>
                        <Tasks />
                    </route>
                    <route path='/Completed'>
                        <Completed />
                    </route>
                    <route path='/Contacts'>
                        <Contacts />
                    </route>
                </switch>
            </router>
            
        )
    }
}

export default App;
