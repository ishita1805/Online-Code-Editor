import React from 'react'
import {SettingsProvider} from './context/SettingsContext'
import {LangProvider} from './context/LanguagesContext'
import Explorer from './components/explorer/Explorer'
import Editor from './components/editor/Editor'
import Viewer from './components/viewer/Viewer'

function App() {
  return (
    <div className='dyte'>
      <LangProvider>
        <SettingsProvider>
          <Explorer/>
          <Editor/>
        </SettingsProvider>
        <Viewer/>
      </LangProvider>
    </div>
  );
}

export default App;
