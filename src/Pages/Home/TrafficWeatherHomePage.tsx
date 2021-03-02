import React, { Component } from 'react';
import DateTimeComponent from '../../Components/DateTime/DateTimeComponent';
import LocationWeatherComponent from '../../Components/LocationWeather/LocationWeatherComponent';
import ScreenshotComponent from '../../Components/Screenshot/ScreenshotComponent';
import TrafficWeatherUtils from './TrafficWeatherUtils';

export class TrafficWeatherHomePage extends Component<any> {
    constructor(props:any){
        super(props);
    }
    render() {
        const utils = new TrafficWeatherUtils();
        return (
            <React.Fragment>
                <DateTimeComponent {...this.props} dateTimeChange={utils.dateTimeChange}/>
                <LocationWeatherComponent {...this.props} optionChange={utils.locationChange}/>
                <ScreenshotComponent {...this.props}/>
            </React.Fragment>
        )
    }
}

export default TrafficWeatherHomePage
