import React from 'react'

const ExistingAccount = () => {
    return (
        <div className='container account__container'>
            <h3>Welcome back!</h3>
            <label className="inputs">
                <input type="text" placeholder='Username or Email' />
                <input type="text" placeholder='Password' />
            </label>
        </div>
    )
}

export default ExistingAccount;
