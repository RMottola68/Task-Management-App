import React from 'react';

const Tasks = ({ setInputText, tasks, setTasks, inputText, setStatus }) => {
    
    const inputTaskHandler = (e) => {
        setInputText(e.target.value); 
    };

    const submitTaskHandler = (e) => {
        setTasks([
            ...tasks, {text: inputText, completed: false, id: Math.random() * 100}
        ])
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return (    

        <div className='py-3 m-5'>
            <div className={'d-flex justify-content-center'}>
                    <input type="text" placeholder={'Enter Task Here'} className={'p-1 mx-2 w-100'} value={inputText} onChange={inputTaskHandler}></input>
                    <button onClick={submitTaskHandler}  type={'primary'} className={'taskButton btn btn-primary'}>Add</button>
                    <div >
                        <select name='tasks' className={'p-2'} onChange={statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="active">Active</option>
                        </select>
                    </div>             
            </div>
        </div>
    )
}

export default Tasks;