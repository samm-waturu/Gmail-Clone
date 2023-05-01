import React, { useEffect, useState } from 'react';
import '../components-styles/e_list.css';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SecOption from './SecOption';
import EmailRow from './EmailRow';
import { db } from '../firebase/firebase';

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails').orderBy('timestamp','desc')
      .onSnapshot((snapshot) => setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      ))
  }, [])
  return (
    <div className={'e_list'}>
      <div className='e_list_settings'>
        <div className='e_list_left'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>

        </div>
        <div className='e_list_right'>
          <IconButton>
            <ChevronLeftIcon />

          </IconButton>
          <IconButton>
            <ChevronRightIcon />

          </IconButton>
          <IconButton>
            <KeyboardHideIcon />

          </IconButton>
          <IconButton>
            <SettingsIcon />

          </IconButton>
        </div>
      </div>

      <div className='e_list_sections'>
        <SecOption Icon={InboxIcon} title={'Primary'} color={'red'} selected={true} />
        <SecOption Icon={PeopleIcon} title={'Social'}  color='#1A73E8' />
        <SecOption Icon={LocalOfferIcon} title={'Promotions'} color={'green'} />

      </div>

      <div className='e_list_list'>

        {emails.map(({id, data: {
          to, subject, message, timestamp
        }}) => (
          <EmailRow

          id={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}

          />
        ))}

        {/*<EmailRow title='Twitch' subject='Dummy text' description='Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum' time='10PM' />*/}
      </div>



    </div>
  );
}

export default EmailList;
