import React from 'react';
import './app.css';
import Icon from '@mdi/react'
import { mdiMenu, mdiFormatListBulleted, mdiApps } from '@mdi/js'

function App() {
  return (
    <div className="appWrapper">
      <div className="app">
        <header>
          <button><Icon path={mdiMenu} size={'20px'} horizontal /></button>
          <div className="rightBlock">
            <button><Icon path={mdiApps} size={'20px'} horizontal /></button>
            <button><Icon path={mdiFormatListBulleted} size={'20px'} horizontal /></button>
          </div>
        </header>
        <main>
          <h1>所有筆記</h1>
          <p>共有 10 個筆記</p>
          <button className="newNoteBtn">New Note</button>
          <div className="noteItem">
            <h2>靈感隨手記</h2>
            <p>靈感總是說來就來，所以就隨手記一下～</p>
          </div>
          <div className="noteItem">
            <h2>無標題</h2>
            <p>業們是上即善時心現背藥此望角西少，我以況這，心在如對今。次後其本電很我要檢期告創就張點禮文市腦什...</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
