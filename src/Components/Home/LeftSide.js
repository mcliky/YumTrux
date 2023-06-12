import React, { useContext } from 'react'
import Info from './Info'
import HomeData from '../Store/home-context'
import image1 from '../images/link-2.png'
import image2 from '../images/2.png'
import style from '../../Styles/Info.module.css'

export default function LeftSide() {
  const ctx = useContext(HomeData)
  return (
    <React.Fragment>
      <Info
        image2Style={style.image2}
        image3Style={style.image3}
        side={style.leftContainer}
        textSide={style.leftText}
        image1={image1}
        image2={image2}
        text1={ctx.leftSide1}
        text2={ctx.leftSide2}
      />
    </React.Fragment>
  )
}
