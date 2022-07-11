import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import BeGuided from '../components/BeGuided';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Login = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  const notifySuccess = () =>
    toast.info(
      'Votre inscription a bien été prise en compte ! Vous pouvez désormais vous connecter.',
      {
        position: 'top-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      },
    );
  return (
    <div className="loginSignup">
      <BeGuided />
      {hasAccount ? (
        <LoginForm setHasAccount={setHasAccount} />
      ) : (
        <SignupForm setHasAccount={setHasAccount} notifySuccess={notifySuccess} />
      )}
    </div>
  );
};

export default Login;
