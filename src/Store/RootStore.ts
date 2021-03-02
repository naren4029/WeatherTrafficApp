import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


import rootSaga from '../Sagas';
import { dateTimeReducer } from './DateTime/DateTimeReducer';
import {locationsReducer} from './Locations/LocationsReducer';
import {locationImageReducer} from './LocationImages/LocationImagesReducer';

//const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

export const rootReducer =  combineReducers({    
                                                dateTimeReducer, 
                                                locationsReducer,
                                                locationImageReducer
                                            });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

