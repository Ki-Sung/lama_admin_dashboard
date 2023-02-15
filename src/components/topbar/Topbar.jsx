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
                    <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c18c4293-5763-4576-b0eb-30db36e230a7/main.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T011714Z&X-Amz-Expires=86400&X-Amz-Signature=a93cc15ff8791ae790a76d3e50541952d22c0a45055ae8a951350fdc0132fab8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22main.jpeg%22&x-id=GetObject' alt='' className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}
