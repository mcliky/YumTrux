import React from 'react';
import style from './Welcome.module.css';
import appleImage from '../images/apple (Traced).png';
import playMarketImage from '../images/google-play 1.png'

export default function Welcome() {
  return (
    <div>
      <div className={style.introText}>
        <p>
          <span>Welcome to </span>
          <span className={style.highlightedText}>YumTrux</span>
        </p>
      </div>
      <div className={style.yumDescription}>
        <p>Discover, Order, Savor. Your go-to food truck app.</p>
      </div>
      <div className={style.rectangleApple}>
      <img src={appleImage} alt="Apple" className={style.apple} />
        <span className={style.appleText}>App Store</span>
      </div>
      <div className={style.rectanglePlayMarket}>
      <img src={playMarketImage} alt="playMarket" className={style.playMarketImg} />
        <span className={style.playMarketText}>App Store</span>
      </div>
      <button className={style.startButton}><p className={style.startButtonText}>GET STARTED</p></button>
    </div>
  );
}
