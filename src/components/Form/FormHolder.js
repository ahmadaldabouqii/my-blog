import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './FormHolder.css';

const FormHolder = props => {
  const usersRegisteredData = [];

  const savedRegisteredAccounts = data => {
    usersRegisteredData.push(data);
  };

  const loginState = data => {
    return data;
  };

  return (
    <div className="new-expense">
      <RegisterForm onSaveUsersData={savedRegisteredAccounts} />
      <LoginForm loginState={loginState} adminData={props.adminAccount} />
    </div>
  );
};

export default FormHolder;
