import React from 'react';
import style from '../../Styles/RunningText.module.css';

export default function RunningText() {
  return (
    <div className={style.runningTextBackground}>
      <div className={style.runningTextContainer}>
        <div className={style.runningText}>JOIN YUMTRUX TODAY</div>
        <div className={style.rhombus}></div>
      </div>
    </div>
  );
}
