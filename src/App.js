import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import Tasks from './Tasks';
import About from './About';
import Contacts from './Contacts';
import TaskList from './TaskList';
import Task from './Task';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";


function App() { 

    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        getLocalTasks();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTasks();
    }, [tasks, status]);

    const filterHandler = () => {
        switch(status){
            case'completed': setFilteredTasks(tasks.filter(task => task.completed === true))
            break;
            case 'active': setFilteredTasks(tasks.filter(task => task.completed === false))
            break;
            default: setFilteredTasks(tasks);
            break;
        }
    }

    const saveLocalTasks = () => {        
            localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getLocalTasks = () => {
        if(localStorage.getItem('tasks') === null){
            localStorage.setItem('tasks', JSON.stringify([]));
        } else {
            let localTasks = JSON.parse(localStorage.getItem('tasks'));
            setTasks(localTasks);
        }
    }

    return(
        <Router>
            <Route exact path="/">
                <Redirect to="/About" />
            </Route>
                    
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
                    setInputText={setInputText}
                    setStatus={setStatus}                    
                    />
                    
                    <TaskList 
                    setTasks={setTasks} 
                    tasks={tasks}
                    filteredTasks={filteredTasks}
                    />
                </Route>
                <Route path='/Contacts'>
                    <Contacts 
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    setLastName={setLastName}
                    setFirstName={setFirstName}
                    setEmail={setEmail}
                    contacts={contacts}
                    setContacts={setContacts}
                    />
                </Route>              

                </Switch>    
            </div>          
        </Router>
        
    )
    
}

export default App;
