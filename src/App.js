import React from 'react'
import { SettingsProvider } from './context/SettingsContext'
import { LangProvider } from './context/LanguagesContext'
import Explorer from './components/explorer/Explorer'
import Editor from './components/editor/Editor'
import github from './assets/github.png'
import Viewer from './components/viewer/Viewer'

function App() {
  return (
    <>
      <div className='dyte'>
        <LangProvider>
          <SettingsProvider>
            <Explorer />
            <Editor />
          </SettingsProvider>
          <Viewer />
        </LangProvider>
      </div>
      <div className='dyte-small'>
        <div className='welcome-box'>
          <h1>Hey There!👋</h1>
          <h3>This code editor is not available for mobile devices</h3>
          <p>The code for this project available at my github</p>
          <a href='https://github.com/ishita1805/Dyte-React-Task' target='__blank'><img alt='github' src={github} className='icon' /></a>
        </div> </div>
    </>
  );
}

export default App;
