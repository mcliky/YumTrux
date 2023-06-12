import style from './App.module.css';
import homeStyle from './Styles/Home.module.css'
import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
<div className={style.mainBackground}>
<div className={homeStyle.homeContainer}>
<Home></Home>
</div>
{/* <About></About> */}
</div>
  );
}

export default App;
