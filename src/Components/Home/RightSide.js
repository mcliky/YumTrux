import React from 'react'
import style from './RightSide.module.css'

const RightSide = () => {
  return (
    <React.Fragment>
    <div className={style.orderContainer}>
      <div className={style.order}></div>
      <div className={style.orderBag}></div>
      <p className={style.ordText}>
        Convenient platform for managing your food truck and processing orders
      </p>
    </div>
    <div className={style.userContainer}>
    <div className={style.user}></div>
    <div className={style.userBase}></div>
    <p className={style.userText}>
      Convenient platform for managing your food truck and processing orders
    </p>
  </div>
  </React.Fragment>
  )
}

export default RightSide
