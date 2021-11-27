import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (email === '' || password === '' || !localStorage.getItem('users'))
      return;

    let allUsersRegistered = JSON.parse(localStorage.getItem('users'));

    for (let i = 0; i < allUsersRegistered.length; i++) {
      if (
        allUsersRegistered[i].email === email &&
        allUsersRegistered[i].password === password
      ) {
        const loggedAccount = {
          email: allUsersRegistered[i].email,
          password: allUsersRegistered[i].password,
        };

        localStorage.setItem('loggedAccount', JSON.stringify(loggedAccount));
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;

/*

import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (email === '' || password === '') return;

    const [allUsersRegistered] = props.onSaveUsersRegisterd;
    console.log('LoginForm.js', allUsersRegistered);

    for (let i = 0; i < allUsersRegistered.length; i++) {
      if (
        allUsersRegistered[i].email === email &&
        allUsersRegistered[i].password === password
      ) {
        console.log('Ohh, mathed!!');
      } else {
        console.log('sorry, not mathched!!', allUsersRegistered);
      }
    }

    // console.log([...allUsersRegistered].email);
    // console.log([...allUsersRegistered].password);
    //   console.log('not equal!!');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;

*/
