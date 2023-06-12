import React, { useContext } from 'react'
import HomeData from '../Store/home-context'
import Info from './Info'
import image1 from '../images/3.png'
import image2 from '../images/4.png'
import style from '../../Styles/Info.module.css'

const RightSide = () => {
  const ctx = useContext(HomeData)
  return (
    <React.Fragment>
      <Info
        image2Style={style.image4}
        image3Style={style.image5}
        side={style.rightContainer}
        textSide={style.rightText}
        image1={image1}
        image2={image2}
        text1={ctx.rightSide1}
        text2={ctx.rightSide2}
      />
    </React.Fragment>
  )
}

export default RightSide
