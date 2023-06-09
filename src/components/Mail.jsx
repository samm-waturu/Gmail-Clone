import React from 'react';
import '../components-styles/mail.css';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';

function Mail() {

  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail)

  return (
    <div className={'mail'}>
      <div className='mail_tools'>
      <div className='mail_tools_left'>
        <IconButton onClick={() => {
          navigate('/');
        }}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton>
          <MoveToInboxIcon />
        </IconButton>
        <IconButton>
          <ErrorIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <EmailIcon />
        </IconButton>
        <IconButton>
          <WatchLaterIcon />
        </IconButton>

      </div>
      <div className='mail_tools_right'>
        <IconButton>
          <UnfoldMoreIcon />
        </IconButton>
        <IconButton>
          <PrintIcon />
        </IconButton>
        <IconButton>
          <ExitToAppIcon />
        </IconButton>

      </div>
      </div>
      <div className='mail_body'>
        <div className='mail_body_header'>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className='mail_important' />
          <p>{selectedMail?.title}</p>
          <p className='mail_time'>{selectedMail?.time}</p>
        </div>
        <div className='mail_message'>
          <p>
            {selectedMail?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
