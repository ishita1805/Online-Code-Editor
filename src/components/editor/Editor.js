import React, { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import './editor.css'

const Editor = () => {
    const { active } = useContext(SettingsContext);
    return (
        <div className='ed-container'>
            {/* header */}
            <div className='ed-header'>
                <div className='ed-head-title'>
                    <img className='icon' alt={active.id} src={active.url} />
                    {active.text}
                </div>
            </div>
            {/* body of the editor */}
            <div className='ed-editor-body'>
                the majority have suffered alteration in some
                form, by injected humour, or randomised words 
                which don't look even slightly believable. If 
                you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing 
                hidden in the middle of text. All the Lorem Ipsum 
                generators on the Internet tend to repeat predefined 
                chunks as necessary, making this the first true generator 
                on the Internet. It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, to generate 
                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is 
                therefore always free from repetition, injected humour, or 
                non-characteristic words etc.
            </div>
        </div>
    )
}

export default Editor
