import { put, takeLatest, select } from 'redux-saga/effects';
import APIManager from '../../Config/APIManager';

function* fetchLocationImages() {
    const currState = yield select();
    const json = yield fetch(APIManager.imagesUrl+'?date_time='+currState.dateTimeReducer.dateTime+':00')
            .then(response => response.json(), );    
            
    yield put({ type: "FETCHED_LOCATION_IMAGES", json: json, });
}

export default function* fetchLocationImagesWatcher() {
     yield takeLatest('GET_LOCATION_IMAGES', fetchLocationImages)
}