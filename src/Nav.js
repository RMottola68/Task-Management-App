import React from 'react';
import {
    NavLink
  } from "react-router-dom";
const nav = (props) => {
    return (
        <div className='Nav'>
            <div className={'navbar bg-primary border-bottom justify-content-center'}>
                <ul>
                    <li className={'d-inline-flex px-2 px-sm-5 align-middle'}>
                        <NavLink exact={true} activeClassName='is-active' activeStyle={{textDecoration: 'underline', textDecorationColor: 'white'}} to='/About'>
                        <span className={'text-light font-weight-bold pointer'}>About</span>
                        </NavLink>
                    </li>
                    <li className={'d-inline-flex px-2 px-sm-5 align-middle'}>
                        <NavLink activeClassName='is-active' activeStyle={{textDecoration: 'underline', textDecorationColor: 'white'}} to='/Tasks'>
                        <span className={'text-light font-weight-bold'}>Tasks</span>
                        </NavLink>
                    </li>
                    <li className={'d-inline-flex px-2 px-sm-5 align-middle'}>
                        <NavLink activeClassName='is-active' activeStyle={{textDecoration: 'underline', textDecorationColor: 'white'}} to='/Contacts'>
                        <span className={'text-light font-weight-bold'}>Contacts</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default nav;

