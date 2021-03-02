import { GetLocationImagesActionTypes, FETCHED_LOCATION_IMAGES, SELECTED_LOCATION_IMAGE } from './Models/Actions';
import { LocationImages } from './Models/LocationImages';
import { Action, Reducer } from 'redux';

const defaultState: LocationImages = {
    areaImageData:[],
    selectedLocationImage:{}
}

export const locationImageReducer: Reducer<LocationImages, Action> = (
    state = defaultState,
    action: GetLocationImagesActionTypes
) => {
    const nextState = {
        areaImageData:state.areaImageData,
        selectedLocationImage:state.selectedLocationImage
    }
    switch (action.type) {
        case FETCHED_LOCATION_IMAGES:
            nextState.areaImageData = (action.json && action.json.items && action.json.items.length && action.json.items[0].cameras.length)?action.json.items[0].cameras:[];
            return nextState;
        case SELECTED_LOCATION_IMAGE:
            nextState.selectedLocationImage=action.payload;
            return nextState;
        default:
        return state;
    }
}