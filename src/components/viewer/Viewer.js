import React,{ useContext } from 'react'
import {LangContext} from '../../context/LanguagesContext'
import './viewer.css'

const Viewer = () => {
  const {html,css, js} = useContext(LangContext);
  const src = `<head><title>Dyte demo</title><head>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>`

    return (
        <div className='cv-container'>
          <div className='cv-header'>Compiler</div>
          <iframe 
          srcDoc={src}
          title='viewer' 
          className='cv-viewer'
          sandbox='allow-scripts'
          />
        </div>
    )
}

export default Viewer
