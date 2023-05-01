import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../components-styles/sendmail.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { onFailToSend, onSendSuccessful } from '../features/pluginSlice';

function SendMail() {
  const formStateClose = useDispatch();
  const sendStateSuccess = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className={'sendmail'}>
      <div className='sendmail_header'>
        <h3>
          New Message
        </h3>
        <CloseIcon onClick={() => formStateClose(closeSendMessage())} className={'sendmail_close'} />
      </div>

      <form onSubmit={handleSubmit((data) => {
          // console.log(data);
         let pushData = () => {
            db.collection('emails').add({
           to: data.to,
           subject: data.subject,
           message: data.message,
           timestamp: firebase.firestore.FieldValue.serverTimestamp() // Diff region in time
         });}
        pushData()
        if(pushData){
          console.log(`success`)
          formStateClose(closeSendMessage())
          sendStateSuccess(onSendSuccessful())
        }else{
          console.log(`failed`)
          sendStateSuccess(onFailToSend())
        }
        }
      )}>
        <input placeholder={'To'}
               type={'email'} {...register('to', { required: true })} />
        {errors.to && <p className={'err_message'}> 'To' is required ! </p>}
        <input type='text'
               placeholder={'Subject'} {...register('subject', { required: true })} />
        {errors.subject && <p className={'err_message'}> 'Subject' is required !</p>}
        <input type='text' className={'sendmail_message'}
               placeholder={'Message...'} {...register('message', { required: true })} />
        {errors.message && <p className={'err_message'}> 'Message' is required !</p>}
        <div className='sendmail_options'>
          <button className={'sendmail_send'}
                  variant={'contained'}
                  color={'primary'}
                  type={'submit'}>
            Send
          </button>

        </div>
      </form>


    </div>
  );
}

export default SendMail;
