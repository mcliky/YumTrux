import React from 'react';
import Welcome from './Welcome';
import Top from './Top';
import style from '../../Styles/Home.module.css';
import Background from './Background';
import RunningText from './RunningText';
import LeftSide from './LeftSide';
import RightSide from './RightSide'

export default function Home() {
  return (
    <div className={style.mainBackground}>
      <Top />
      <Welcome />
      <LeftSide />
      <RightSide />
      <Background />
      <RunningText />
    </div>
  );
}
