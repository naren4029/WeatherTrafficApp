export const GET_LOCATIONS = 'GET_LOCATIONS';
export const FETCHED_LOCATIONS = 'FETCHED_LOCATIONS';
export const SELECTED_AREA = 'SELECTED_AREA';
export const SELECTED_AREA_WEATHER = 'SELECTED_AREA_WEATHER';

interface GetLocationAction {
  type: typeof GET_LOCATIONS;
}
interface FetchedLocationAction {
  type: typeof FETCHED_LOCATIONS;
  json:any
}
interface SelectedAreaAction {
  type: typeof SELECTED_AREA;
  payload: string;
}
interface SelectedAreaWeatherAction {
  type: typeof SELECTED_AREA_WEATHER;
  payload: string;
}
export type GetLocationActionTypes = GetLocationAction | FetchedLocationAction | SelectedAreaAction | SelectedAreaWeatherAction;
