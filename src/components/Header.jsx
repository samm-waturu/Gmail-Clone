import React from 'react';
import '../components-styles/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Gmail from '../img/gmail-2.png';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { authUserState, logout } from '../features/userSlice';
import { auth } from '../firebase/firebase';

function Header() {
  //Fetching user information from redux
  const user = useSelector(authUserState)

  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }
  return (
    <div className={'header'}>
      <div className='header_left'>

        <IconButton>
          <MenuIcon />
        </IconButton>

        <img src={Gmail} alt='Gmail icon logo' />


      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input type='text' placeholder={'search'} />
        <IconButton>
          <ArrowDropDownIcon className={'header_caret'} />
        </IconButton>

      </div>
      <div className='header_right'>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>

          <Avatar src={user.photoUrl ? user.photoUrl : user?.photoUrl} onClick={signOut} />
        </IconButton>


      </div>
    </div>
  );
}

export default Header;
