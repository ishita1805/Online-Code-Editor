/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import './code.css'


const Code = (props) => {
    const editor = useRef(null);
    const { active } = useContext(SettingsContext);

    useEffect(() => {
       editor.current.innerText = props.value;
    }, [active])

    const changeHandler = () => {
        clearTimeout();
        setTimeout(()=>{
            props.onChange(editor.current.innerText)
        },1500);
    }
    
    // syntax highlighting, indentation, save code to localstorage, line numbers
    return (
        <pre>
            <code>
                <div
                className='code'
                ref={editor}
                contentEditable='true'
                onKeyUp={changeHandler}
                >
                    <div></div>
                </div>
            </code>
        </pre>
    )
}

export default Code
