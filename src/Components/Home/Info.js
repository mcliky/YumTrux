import React from 'react';
import style from '../../Styles/Info.module.css';
import image1 from '../images/Ellipse 26.png';

const Info = (props) => {
  return (
    <div className={props.side}>
      <div className={style.imageWrapper}>
        <div className={style.image1}>
          <img className={style.image1} src={image1} alt="Img1" />
          <img className={props.image2Style} src={props.image1} alt="Img 2" />
        </div>
      </div>

      <p className={props.textSide}>{props.text1}</p>

      <div className={style.imageWrapper}>
        <div className={style.image1}>
          <img className={style.image1} src={image1} alt="Img 1" />
          <img className={props.image3Style} src={props.image2} alt="Img 3" />
        </div>
      </div>

      <p className={props.textSide}>{props.text2}</p>
    </div>
  );
};

export default Info;
