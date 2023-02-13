import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Aone admin</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src='https://url.kr/v37mok' alt='' className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}
