import { GetLocationActionTypes, FETCHED_LOCATIONS, SELECTED_AREA, SELECTED_AREA_WEATHER, GET_LOCATIONS } from './Models/Actions';
import { Locations } from './Models/Locations';
import { Action, Reducer } from 'redux';
import labels from '../../Assets/i18n/en.json'

const defaultState: Locations = {
    areaMetaData:[],
    areaWeatherData:[],
    selectedArea:{name:labels.selectLocation},
    selectedAreaWeather:labels.noData,
    loader:{isLoading:false}
}

export const locationsReducer: Reducer<Locations, Action> = (
    state = defaultState,
    action: GetLocationActionTypes
) => {
    const nextState = {
        areaMetaData:state.areaMetaData,
        areaWeatherData:state.areaWeatherData,
        selectedArea:state.selectedArea,
        selectedAreaWeather:state.selectedAreaWeather,
        loader:state.loader
    }
    switch (action.type) {
        case GET_LOCATIONS:
            nextState.loader = {isLoading:true};
            return nextState;
        case FETCHED_LOCATIONS:
            nextState.areaMetaData = (action.json && action.json.area_metadata && action.json.area_metadata.length)?action.json.area_metadata:[];
            nextState.areaWeatherData = (action.json && action.json.items && action.json.items.length && action.json.items[0].forecasts)?action.json.items[0].forecasts:[];
            nextState.loader = {isLoading:false};
            return nextState;
        case SELECTED_AREA:
            nextState.selectedArea = action.payload;
            return nextState;
        case SELECTED_AREA_WEATHER:
            nextState.selectedAreaWeather = action.payload;
            return nextState;
        default:
        return state;
    }
}
