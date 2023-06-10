import React from 'react'
import style from '../../Styles/Info.module.css'
import circle from '../images/Ellipse 26.png'
const Info = props => {
  return (
    <div style={props.style1} className={style.leftContainer}>
    <div>
    <img
      className={style.image1}
      src={circle}
    />
    <img
      className={style.image2}
      src={`${props.image2}`}
    />
    <p className={style.text}>{props.text1}</p>
    </div>
    <div>
    <img
      className={style.image1}
      src={circle}
    />
    <img
      className={style.image3}
      src={`${props.image3}`}
    />
    <p className={style.text}>{props.text2}</p>
    </div>
  </div>
  )
}

export default Info