import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import '../components-styles/e_row.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

function EmailRow({ title, subject, time, id, description }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(selectMail({
      id,title,subject,description,time //payloads
    }))
  }

  return (
    <div onClick={() =>{
      navigate('/mail')
      openMail()
    } } className={'e_row'}>

      <div className='e_row_options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />

        </IconButton>
        <IconButton>

        </IconButton>

      </div>
      <h3 className='e_row_title'>
        {title}
      </h3>
      <div className='e_row_message'>
        <h4>
          {subject}{' '}
          <span className={'e_row_desc'}>
            - {' '}{description}
          </span>
        </h4>
      </div>
      <p className='e_row_time'>
        {time}
      </p>
    </div>
  );
}

export default EmailRow;
