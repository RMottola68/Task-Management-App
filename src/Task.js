import React from 'react';

const Task = ({ text, task, tasks, setTasks }) => {
    const deleteHandler = () => {
        setTasks(tasks.filter(el => el.id !== task.id))
    };

    const completeHandler = () => {
        setTasks(tasks.map(item => {
            if(item.id === task.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );   
    }

    return (
        <div className='task border-bottom'>
            <li className={`task-item ${task.completed ? 'completed' : ''}`}>{text}</li> 
            <button type='success' className={'btn btn-success'} onClick={completeHandler}>
                <i className={'fas fa-check'}></i>
            </button>
            <button onClick={deleteHandler} type={'button'} className='btn btn-danger m-2'>
                <i className='fas fa-trash'></i>
            </button>
            
        </div>
    )
}

export default Task;