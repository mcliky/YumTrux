import React from 'react'
import style from '../../Styles/Rectangles.module.css'

const Rectangles = () => {
  return (
    <React.Fragment>
      <div className={`${style.leftRectangle} ${style.inside}`}>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>elit, sed
          do eiusmod tempor incididunt ut labore et<br></br>dolore magna aliqua.
          Ut enim ad minim veniam, quis<br></br>nostrud exercitation ullamco
          laboris nisi ut aliquip ex<br></br>ea commodo consequat. Duis aute
          irure dolor in<br></br>reprehenderit in voluptate velit esse cillum
          dolore eu<br></br>fugiat nulla pariatur. Excepteur sint occaecat
          <br></br>cupidatat non proident, sunt in culpa qui officia deserunt
          mollit<br></br>anim id est laborum.
        </p>
      </div>
      <div className={`${style.rightRectangle} ${style.inside}`}>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>elit, sed
          do eiusmod tempor incididunt ut labore et<br></br>dolore magna aliqua.
          Ut enim ad minim veniam, quis<br></br>nostrud exercitation ullamco
          laboris nisi ut aliquip ex<br></br>ea commodo consequat. Duis aute
          irure dolor in<br></br>reprehenderit in voluptate velit esse cillum
          dolore eu<br></br>fugiat nulla pariatur. Excepteur sint occaecat
          <br></br>cupidatat non proident, sunt in culpa qui officia deserunt
          mollit<br></br>anim id est laborum.
        </p>
      </div>
    </React.Fragment>
  )
}

export default Rectangles
