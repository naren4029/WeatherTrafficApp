import { put, takeLatest, select } from 'redux-saga/effects';
import APIManager from '../../Config/APIManager';

function* fetchLocations() {
    const currState = yield select();
    const json = yield fetch(APIManager.locationsUrl+'?date_time='+currState.dateTimeReducer.dateTime+':00')
            .then(response => response.json(), );    
    yield put({ type: "FETCHED_LOCATIONS", json: json, });
}

export default function* fetchLocationsWatcher() {
     yield takeLatest('GET_LOCATIONS', fetchLocations)
}