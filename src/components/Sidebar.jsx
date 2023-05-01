import React from 'react';
import '../components-styles/sidebar.css';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import DuoIcon from '@mui/icons-material/Duo';
import PersonIcon from '@mui/icons-material/Person';
import SideOption from './SideOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
import { onFailToSend } from '../features/pluginSlice';


function Sidebar() {
  const formStateOpen = useDispatch();
  const sendStateSuccess = useDispatch()
  return (
    <div className={'sidebar'}>
      {/*<h6>
              Sidebar
            </h6>*/}
      <Button onClick={() => {
        formStateOpen(openSendMessage())
        sendStateSuccess(onFailToSend())
      }} className={'sidebar_compose'}
              startIcon={<AddIcon fontSize={'large'} />}>
        Compose
      </Button>

      <SideOption Icon={InboxIcon} title='Inbox' number='54' selected={true} />
      <SideOption Icon={StarIcon} title='Starred' number='23' />
      <SideOption Icon={AccessTimeIcon} title='Snoozed' number='8' />
      <SideOption Icon={LabelImportantIcon} title='Important' number='7' />
      <SideOption Icon={NearMeIcon} title='Sent' number='2' />
      <SideOption Icon={NoteIcon} title='Drafts' number='9' />
      <SideOption Icon={ExpandMoreIcon} title='More' number='2' />

      <div className='sidebar_footer'>
        <div className='footer_icons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
        <div className={'successful'}>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
