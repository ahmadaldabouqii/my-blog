import FormHolder from './components/Form/FormHolder';
import User from './components/UserPage/User';
import Admin from './components/AdminPage/Admin';

function App() {
  const adminData = {
    email: 'admin@admin.com',
    password: 'admin@123',
  };

  const loginState = data => {
    return data;
  };

  const getLoggedAcc = key => {
    let data = localStorage.getItem(`${key}`);
    if(data) return JSON.parse(data);
  };

  const s = () => {
    if (!getLoggedAcc('loggedAccount')) {
      return <FormHolder loginState={loginState} adminAccount={adminData} />;
    } else {
      switch (getLoggedAcc('loggedAccount').role) {
      case 'admin':
        return <Admin toAdmin={getLoggedAcc} />;
      case 'user':
        return <User />;
      default:
        return (
          <FormHolder loginState={loginState} adminAccount={adminData} />
        );
      }
    }
  };

  return <div>{s()}</div>;
}

export default App;
