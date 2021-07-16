import Explorer from './components/explorer/Explorer'
import Editor from './components/editor/Editor'
import Viewer from './components/viewer/Viewer'

function App() {
  return (
    <div className='dyte'>
      <Explorer/>
      <Editor/>
      <Viewer/>
    </div>
  );
}

export default App;
