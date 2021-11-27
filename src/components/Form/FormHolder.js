import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './FormHolder.css';

const FormHolder = () => {
  const usersRegisteredData = [];

  const savedRegisteredAccounts = data => {
    // console.log('FormHandler.js', data);
    usersRegisteredData.push(data);
    // const [d] = usersRegisteredData;
    // console.log('UsersData', d);
  };

  return (
    <div className="new-expense">
      <RegisterForm onSaveUsersData={savedRegisteredAccounts} />
      <LoginForm />
    </div>
  );
};

export default FormHolder;
