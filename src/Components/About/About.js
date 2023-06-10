import React from 'react'
import Text from './Text'
import Images from './Images'
import Rectangles from './Rectangles'
import SecondHalf from './SecondHalf'
import style from '../../Styles/About.module.css'

const About = () => {
  return (
    <div className={style.aboutContainer}>
    <Text />
    <Images />
    <Rectangles />
    <SecondHalf />
  </div>
  )
}

export default About
