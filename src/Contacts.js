import React from 'react';

const Contacts = ({ contacts, setContacts, firstName, setFirstName, lastName, setLastName, email, setEmail }) => {

    const inputFirstHandler = (e) => {
        setFirstName(e.target.value);
    }

    const inputLastHandler = (e) => {
        setLastName(e.target.value);
    }

    const inputEmailHandler = (e) => {
        setEmail(e.target.value);
    }

     const submitContactHandler = (e) => {
        e.preventDefault()
        setContacts([
            ...contacts, {firstName: firstName, lastName: lastName, email:email}
        ])
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (

        
        
        <div className={'p-3 m-2'}>
            <h2 className={'text-center'}>Contact List</h2>
            <form>
                <div className={'form-group'}>
                    <label for={'firstName'}>First Name</label>
                    <input className={'form-control'} type={'text'} onChange={inputFirstHandler} value={firstName}/>                
                </div>
                
                <div className={'form-group'}>
                    <label for={'lastName'}>Last Name</label>
                    <input className={'form-control'} type={'text'} onChange={inputLastHandler} value={lastName}/>                
                </div>
                
                <div className={'form-group  '}>
                    <label for={'phoneNum'}>Email</label>
                    <input className={'form-control'} type={'text'} onChange={inputEmailHandler} value={email}/>                
                </div>
                <button type={'primary'} className={'btn btn-primary mt-3 ml-1'} onClick={submitContactHandler}>Submit</button>
            </form>
            
        </div>
    )
}

export default Contacts;