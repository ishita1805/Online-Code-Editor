import {SettingsProvider} from './context/SettingsContext'
import Explorer from './components/explorer/Explorer'
import Editor from './components/editor/Editor'
import Viewer from './components/viewer/Viewer'

function App() {
  return (
    <div className='dyte'>
      <SettingsProvider>
        <Explorer/>
        <Editor/>
      </SettingsProvider>
      <Viewer/>
    </div>
  );
}

export default App;
