import React from 'react'
import './viewer.css'

const Viewer = () => {
    return (
        <div className='cv-container'>
          <div className='cv-header'>Compiler</div>
          <iframe title='viewer' className='cv-viewer'/>
        </div>
    )
}

export default Viewer
