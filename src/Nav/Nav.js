import React from 'react';

const nav = (props) => {
    return (
        <div className='Nav'>
            <div className={'navbar bg-success border-bottom justify-content-center'}>
                <ul>
                    <li className={'d-inline-flex px-5'}>
                        <span className={'text-light font-weight-bold pointer'}>Tasks</span>
                    </li>
                    <li className={'d-inline-flex px-5'}>
                        <span className={'text-light font-weight-bold'}>Completed</span>
                    </li>
                    <li className={'d-inline-flex px-5'}>
                        <span className={'text-light font-weight-bold'}>Contacts</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default nav;

