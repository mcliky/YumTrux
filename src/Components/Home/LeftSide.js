import React from 'react'
import Info from './Info'
import link from '../images//link-2.png'
import note from '../images/2.png'



export default function LeftSide() {
  return (
    <React.Fragment>
      <Info style1={{ marginBottom: '10px' }} image2={link} image3={note}/>  
    </React.Fragment>
  )
}
