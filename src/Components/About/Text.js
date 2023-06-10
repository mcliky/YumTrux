import React, { useContext } from 'react'
import style from '../../Styles/About.module.css'
import AboutData from '../Store/about-context'

const Text = () => {
  const ctx = useContext(AboutData)
  return (
    <React.Fragment>
      <p className={style.aboutTitle}>{ctx.aboutTitle}</p>
      <div>
        <p className={style.aboutText}>
          <span>{ctx.aboutText1}</span>
          <span className={style.aboutHighlightedText}>{ctx.aboutText2}</span>
          <br />
          <span className={style.aboutHighlightedText}>{ctx.aboutText3}</span>
          <span>{ctx.aboutText4}</span>
          <br />
          <span>{ctx.aboutText5}</span>
        </p>
      </div>
    </React.Fragment>
  )
}

export default Text
