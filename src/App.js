import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpen } from './features/mailSlice';
import { isSendSuccessful } from './features/pluginSlice';
import Success from './components/Success';
import { authUserState, login } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase/firebase';

function App() {

  //Persist login

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  const formState = useSelector(selectIsOpen);
  const successState = useSelector(isSendSuccessful);
  const authUser = useSelector(authUserState);
  return (
    <Router>

        {!authUser ? (
          <Login />
        ) : (
          <div className='app'>

            <Header />

            {successState && <Success />}

            <div className='app_body'>
              <Sidebar />
              <Routes>
                <Route path='/mail' element={<Mail />} />

                <Route path='/' element={<EmailList />} />
              </Routes>

            </div>

            {formState && <SendMail />}

          </div>
        )}

    </Router>
  );
}

export default App;
