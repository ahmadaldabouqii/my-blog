import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const allUsers = [];

  const nameChangeHandler = e => {
    setName(e.target.value);
  };

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!name || !email || password === '') return;

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    allUsers.push(userData);

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(allUsers));
    } else {
      let data = JSON.parse(localStorage.getItem('users'));
      data.push(userData);
      localStorage.setItem('users', JSON.stringify(data));
    }

    props.onSaveUsersData(allUsers);

    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
