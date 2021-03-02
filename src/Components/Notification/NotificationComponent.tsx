import React, {useEffect,useState} from 'react';
import clsx from 'clsx';
import './NotificationStyle.scss';
import labels from '../../Assets/i18n/en.json';

export default function NotificationComponent(props:any) {
    const [displayInfo, setDisplayInfo] = useState(true);
    const hideDisplayInfo = (e)=>{
        e.preventDefault();
        setDisplayInfo(false);
    }
    useEffect(() => {
        if(props.loader.isLoading){
            setDisplayInfo(true);
        }
    })
    
    
    return(
        <React.Fragment>
            <div className={clsx({'notification-pnl-cls':true,'show-cls':!props.areaMetaData.length&&displayInfo})}>
                <span className="notification-info-icon-cls">&#8520;</span>
                <span className="notification-info-text-cls">{labels.noDataFound}</span>
                <span className="notification-close" onClick={(e)=>hideDisplayInfo(e)}>&times;</span>
            </div>
        </React.Fragment>
        
    )
}