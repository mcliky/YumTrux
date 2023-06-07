import React, {useContext} from 'react';
import style from './LeftSide.module.css';
import HomeData from '../Store/auth-context';

export default function LeftSide() {
  const ctx = useContext(HomeData)
  return (
    <React.Fragment>
      <div className={style.connection}></div>
      <div className={style.connectionLink}></div>
      <p className={style.conText}>{ctx.leftSide1}</p>
      <div className={style.registration}></div>
      <div className={style.registrationNote}></div>
      <p className={style.regText}>{ctx.leftSide2}</p>
    </React.Fragment>
  );
}
