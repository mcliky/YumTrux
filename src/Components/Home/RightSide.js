import React, {useContext} from 'react'
import style from '../../Styles/RightSide.module.css'
import HomeData from '../Store/home-context'

const RightSide = () => {
  const ctx = useContext(HomeData)
  return (
    <React.Fragment>
    <div className={style.orderContainer}>
      <div className={style.order}></div>
      <div className={style.orderBag}></div>
      <p className={style.ordText}>
        {ctx.rightSide1}
      </p>
    </div>
    <div className={style.userContainer}>
    <div className={style.user}></div>
    <div className={style.userBase}></div>
    <p className={style.userText}>
      {ctx.rightSide2}
    </p>
  </div>
  </React.Fragment>
  )
}

export default RightSide
