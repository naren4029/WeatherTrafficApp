import { DATE_CHANGE, TIME_CHANGE } from './Models/Actions';

export const changeDate = (dateVal:string) => ({
  type: DATE_CHANGE,
  payload:dateVal
});

export const changeTime = (timeVal:string) => ({
  type: TIME_CHANGE,
  payload:timeVal
});
