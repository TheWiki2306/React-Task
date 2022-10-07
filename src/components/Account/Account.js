import React from 'react';
import './Account.css';

const Account = () => {
    return (
        <section className="container account__container">
            <h3>Create your Account</h3>
            <label className="inputs">
                <input type="text" placeholder='Your Firstname' />
                <input type="text" placeholder='Your Surname' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm password' />

            </label>
            <small>Already have an account? <a href="/signin">Sign in</a></small>
        </section>
    )
}

export default Account;
