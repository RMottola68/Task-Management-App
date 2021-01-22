import React, { useState } from 'react';
import { Button } from 'antd';

const Tasks = ({ setInputText, tasks, setTasks, inputText }) => {
    
    const inputTaskHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value); 
    };

    const submitTaskHandler = (e) => {
        setTasks([
            ...tasks, {text: inputText, completed: false, id: Math.random() * 100}
        ])
        setInputText('');
    }
    
    return (    

        <div className='py-3 m-5'>
            <div className={'d-flex justify-content-center'}>
                    <input type="text" placeholder={'Enter Task Here'} className={'p-1 mx-2 w-100'} value={inputText} onChange={inputTaskHandler}></input>
                    <Button onClick={submitTaskHandler} type={'primary'} className={'taskButton'}>Add</Button>                
            </div>
        </div>
    )
}

export default Tasks;