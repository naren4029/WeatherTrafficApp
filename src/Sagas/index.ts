import { all } from 'redux-saga/effects';
import fetchLocationsWatcher from './FetchLocations/FetchLocations';
import fetchLocationImagesWatcher from './FetchImages/FetchImages';

export default function* rootSaga() {
    yield all([
        fetchLocationsWatcher(),
        fetchLocationImagesWatcher()
    ]);
}