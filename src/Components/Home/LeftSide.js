import React from 'react';
import style from './LeftSide.module.css';

export default function LeftSide() {
  return (
    <React.Fragment>
      <div className={style.connection}></div>
      <div className={style.connectionLink}></div>
      <p className={style.conText}>Instant connection to our popular food truck app</p>
      <div className={style.registration}></div>
      <div className={style.registrationNote}></div>
      <p className={style.regText}>Easy registration process and setup for your food truck</p>
    </React.Fragment>
  );
}
