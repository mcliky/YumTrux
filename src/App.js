import style from './App.module.css';
import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
<div className={style.mainBackground}>
<Home></Home>
{/* <About></About> */}
</div>
  );
}

export default App;
