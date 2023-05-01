import React from 'react';
import '../components-styles/Login.css';
import gmailLogo from '../img/gmail-2.png';
import { auth, provider } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { IconButton } from '@mui/material';


function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider).then(
      ({
         user
       }) => {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }));
      }
    )
      .catch(error => alert(error.message));
  };
  return (
    <div className={'login'}>
      <div className='login_container'>
        <img src={gmailLogo} alt='Gmail-logo' />
        <h2 className={'text'}>Gmail</h2>

          <button className={'login_button'}
                  variant={'contained'}
                  onClick={signIn}
          >
            Login
          </button>


      </div>

    </div>
  );
}

export default Login;
