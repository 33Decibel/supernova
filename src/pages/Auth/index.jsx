import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import LoginBg from '../../assets/loginbg/loginbg.jpg';
import LoginBg from '../../assets/loginbg1.jpg';
import ForgetPassword from './forgetPassword';
import RequestAccess from './RequestAccess';
import Login from './Login';
import OtherLogin from './OtherLogin';
import ToggleButton from './ToggleButton';

export default function Auth({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('signin');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '12qwaszx') {
      sessionStorage.setItem('justLoggedIn', 'true');
      localStorage.removeItem('hasShownModal');
      onLogin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <div
      className='flex items-center justify-center h-screen bg-cover bg-center shadow-lg'
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className='bg-[#f4f4f5] p-8 rounded-xl w-[500px] mx-3'>
        <div className='flex items-center justify-center mb-6'>
          <h2 className='text-3xl font-normal tracking-tight text-gray-900 space-font'>
            Super<span className=' font-normal'>Nova</span>
          </h2>
        </div>
        <ToggleButton activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'signin' ? (
          <Login
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setActiveTab={setActiveTab}
          />
        ) : activeTab === 'reqAccess' ? (
          <RequestAccess
            setUsername={setUsername}
            handleSubmit={handleSubmit}
            username={username}
          />
        ) : (
          activeTab === 'forget' && (
            <ForgetPassword
              setUsername={setUsername}
              handleSubmit={handleSubmit}
              username={username}
            />
          )
        )}
        {activeTab === 'forget' ? '' : <OtherLogin />}
      </div>
    </div>
  );
}
