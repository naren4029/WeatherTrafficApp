import {
  DateTimeActionTypes,
  DATE_CHANGE,
  TIME_CHANGE,
} from './Models/Actions';

import { DateTime } from './Models/DateTime';
import { Action, Reducer } from 'redux';

const defaultState: DateTime = {
  date: "2016-03-01",
  time: "00:00",
  dateTime:"2016-03-01T00:00"
};

export const dateTimeReducer: Reducer<DateTime, Action> = (
  state = defaultState,
  action: DateTimeActionTypes
) => {
  const nextState = {
    date: state.date,
    time: state.time,
    dateTime:state.date+'T'+state.time
  };
  switch (action.type) {
    case DATE_CHANGE:
      nextState.date = action.payload||'';
      nextState.dateTime = action.payload+'T'+state.time;
      return nextState;
    case TIME_CHANGE:
      nextState.time = action.payload||'';      
      nextState.dateTime = state.date+'T'+action.payload;
      return nextState;
    default:
      return state;
  }
};
