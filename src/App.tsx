import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from './Store/RootStore';
import { changeDate, changeTime } from './Store/DateTime/DateTimeAction';
import './App.scss';
import { getLocations, setSelectedArea, setSelectedAreaWeather } from './Store/Locations/LocationsAction';
import { getLocationImages, setSelectedLocationImage } from './Store/LocationImages/LocationImagesAction';

interface AppProps {
  dateChanged: (dateVal:string) => void;
  timeChanged: (timeVal:string) => void;
  getAllLocations:() => any;
  getAllLocationImages:() => any;
  setSelectedArea:(selectedArea:any) => void;
  setSelectedAreaWeather:(selectedAreaWeather:string) => void;
  setSelectedLocationImage:(selectedImageData:any) => void;
}
const mapStateToProps = (state: AppState) => ({
  date:state.dateTimeReducer.date,
  time:state.dateTimeReducer.time,
  areaMetaData:state.locationsReducer.areaMetaData,
  areaWeatherData:state.locationsReducer.areaWeatherData,
  areaImageData:state.locationImageReducer.areaImageData,
  selectedArea:state.locationsReducer.selectedArea,
  selectedAreaWeather:state.locationsReducer.selectedAreaWeather,
  selectedLocationImage:state.locationImageReducer.selectedLocationImage,
  loader:state.locationsReducer.loader
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  dateChanged: (dateVal:string) => dispatch(changeDate(dateVal)),
  timeChanged: (timeVal:string) => dispatch(changeTime(timeVal)),
  getAllLocations:() => dispatch(getLocations()),
  getAllLocationImages:() => dispatch(getLocationImages()),
  setSelectedArea:(selectedArea:any) => dispatch(setSelectedArea(selectedArea)),
  setSelectedAreaWeather:(selectedAreaWeather:string) => dispatch(setSelectedAreaWeather(selectedAreaWeather)),
  setSelectedLocationImage:(selectedImageData:any) => dispatch(setSelectedLocationImage(selectedImageData))
});

const HeaderComponent = React.lazy(() => import('./Components/Header/HeaderComponent'));
const TrafficWeatherHomePage = React.lazy(() => import('./Pages/Home/TrafficWeatherHomePage'));
const NotificationPanel = React.lazy(() => import('./Components/Notification/NotificationComponent'));

export class App extends Component<any> {
  constructor(props:any){
    super(props)
  }
  componentDidMount(){
    this.props.getAllLocations();
    this.props.getAllLocationImages();
  }
  render() {
    return (
      <React.Fragment>
        <React.Suspense fallback={<span>Loading...</span>}>
          <NotificationPanel {...this.props}/>
          <HeaderComponent/>
          <div className="app-body">
            <TrafficWeatherHomePage {...this.props}/>
          </div>
        </React.Suspense>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
