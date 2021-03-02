import './LoactionWeatherStyle.scss';
import labels from '../../Assets/i18n/en.json';
import clsx from 'clsx';
import {useRef} from 'react';

export default function LocationWeatherComponent(props:any) {
    const locations = props.areaMetaData;
    let textInput = useRef(null);
    
    return (
        <div className="location-weather-pnl-cls">
            <span className="location-list-pnl-cls">
                <select className="location-list-cls" id="location-list" onChange={()=>props.optionChange(textInput,locations,props)} ref={textInput} value={props.selectedArea.name}>
                    <option key="99999" value={labels.selectLocation} >{labels.selectLocation}</option>
                    {locations&&locations.map((obj,indx) => <option key={indx} value={obj.name}>{obj.name}</option>)}
                </select>
                <span className={clsx({'loading-spinner-cls':props.loader.isLoading})}></span>
            </span>
            <span className="weather-cls">{props.selectedAreaWeather}</span>
        </div>
    )
}

