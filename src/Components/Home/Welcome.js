import React,{useContext} from 'react';
import style from '../../Styles/Welcome.module.css';
import appleImage from '../images/apple (Traced).png';
import playMarketImage from '../images/google-play 1.png'
import HomeData from '../Store/auth-context';

export default function Welcome() {
  const ctx = useContext(HomeData)
  return (
    <div>
      <div className={style.introText}>
        <p>
          <span>{ctx.titleHalf1}</span>
          <span className={style.highlightedText}>{ctx.titleHalf2}</span>
        </p>
      </div>
      <div className={style.yumDescription}>
        <p>{ctx.desc}</p>
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
