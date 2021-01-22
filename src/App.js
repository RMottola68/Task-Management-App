import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Tasks from './Tasks';
import About from './About';
import Contacts from './Contacts';
import TaskList from './TaskList';
import Task from './Task';
import TaskTabs from './TaskTabs'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


function App() { 

    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([]);

    

    return(
        <Router>
            <div className='App'>
                <Nav />
                    
                <Switch>
                <Route path='/About'>
                    <About />
                </Route>
                <Route path='/Tasks'>
                    <Tasks 
                    inputText={inputText}
                    tasks={tasks}
                    setTasks={setTasks}
                    setInputText={setInputText}/>
                    <TaskList />
                    <TaskTabs />
                </Route>
                <Route path='/Contacts'>
                    <Contacts />
                </Route>
            </Switch>    
            </div>

            
        </Router>
        
    )
    
}

export default App;
