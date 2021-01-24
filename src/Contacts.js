import React from 'react';

const Contacts = () => {
    return (

        
        <div className={'p-3 m-2'}>
            <h2 className={'text-center'}>Contact List</h2>
            <form>
                <div className={'form-group'}>
                    <label for={'firstName'}>First Name</label>
                    <input className={'form-control'} type={'text'} />                
                </div>
                
                <div className={'form-group'}>
                    <label for={'lastName'}>Last Name</label>
                    <input className={'form-control'} type={'text'} />                
                </div>
                
                <div className={'form-group  '}>
                    <label for={'phoneNum'}>Phone Number</label>
                    <input className={'form-control'} type={'text'} />                
                </div>
                <button type={'primary'} className={'btn btn-primary mt-3 ml-1'}>Submit</button>
            </form>
            
        </div>
    )
}

export default Contacts;