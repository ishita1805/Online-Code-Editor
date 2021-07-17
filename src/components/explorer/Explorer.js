import React, { useContext } from 'react'
import './explorer.css'
import data from '../../data/explorer'
import Options from '../options/Options'
import { SettingsContext } from '../../context/SettingsContext'
import github from '../../assets/github.png'

const Explorer = () => {
    const { expand, setExpand, active, setActive } = useContext(SettingsContext);

    const expandHandler = () => {
        setExpand(!expand);
    }

    return (
        <div className={!expand ? 'ex-container' : 'ex-container-small'}>
            {/* header */}
            <div className='ex-header'>
                {
                    !expand ? <span>File Explorer</span> : null
                }
                {
                    !expand ?
                        <span class="material-icons-outlined" onClick={expandHandler}>
                            chevron_left
                        </span> :
                        <span class="material-icons-outlined" onClick={expandHandler}>
                            description
                        </span>
                }
            </div>
            {/* files */}
            {
                data.map((item) => (
                    <div className={active.id === item.id ? 'ex-files active' : 'ex-files'}
                        onClick={() => setActive(item)}>
                        <img className={!expand ? 'icon' : 'icon-closed'} alt={item.id} src={item.url} />
                        {!expand ? item.text : null}
                    </div>
                ))
            }
            {/* additional options */}
            <Options />
            <div className='ex-files'>
            <a href='https://github.com/ishita1805/Dyte-React-Task' target='__blank'><img className={!expand ? 'icon' : 'icon-closed'} alt={'github'} src={github} />
            {!expand ? 'Github URL' : null}</a>
            </div>
        </div>
    )
}

export default Explorer
