export const DATE_CHANGE = 'DATE_CHANGE';
export const TIME_CHANGE = 'TIME_CHANGE';

interface DateChangeAction {
  type: typeof DATE_CHANGE;
  payload:string;
}

interface TimeChangeAction {
  type: typeof TIME_CHANGE;
  payload?:string;
}
export type DateTimeActionTypes = DateChangeAction | TimeChangeAction;
