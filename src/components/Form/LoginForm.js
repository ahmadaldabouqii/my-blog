import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    // event.preventDefault();

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
          name: allUsersRegistered[i].name,
          role: allUsersRegistered[i].role,
        };
        setLogin(!login);
        localStorage.setItem('loggedAccount', JSON.stringify(loggedAccount));
      }
      props.loginState(login);
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
