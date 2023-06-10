import React from 'react'
import style from '../../Styles/About2.module.css'

const SecondHalf = () => {
  return (
    <div className={style.secondHalfContainer}>
      <p className={style.secondHalfText}>
        <span>Why Choose</span>
        <span className={style.highlightedText}> YumTrux?</span>
      </p>
      <p className={style.number1}>01</p>
      <p className={style.title1}>Extensive network</p>
      <p className={style.paragraph1}>We have built a strong community of food enthusiasts actively seeking unique culinary experiences from food trucks.</p>
    </div>
  )
}

export default SecondHalf
