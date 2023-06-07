import React from "react"
import Navbar from "./Navbar"
import style from './Home.module.css'
import logoYumSmall from '../images/348355384_779880837112899_122144659990263234_n 1.png';

export default function Top(){
return(<>
     <div className={style.header}>
        <div className={style.logoContainer}>
          <img src={logoYumSmall} alt="Logo" className={style.logo} />
          <span className={style.logoText}>YumTrux</span>
        </div>
        <Navbar />
      </div>
</>)
}