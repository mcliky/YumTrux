import React from "react";
import style from './Background.module.css';

export default function Background() {
  return (
    <div className={style.backgroundContainer}>
      <div className={style.outerBackgroundLeft}></div>
      <div className={style.innerBackgroundLeft}></div>
      <div className={style.backgroundOverlay}></div>
      <div className={style.outerBackgroundRight}></div>
      <div className={style.innerBackgroundRight}></div>
    </div>
  );
}
