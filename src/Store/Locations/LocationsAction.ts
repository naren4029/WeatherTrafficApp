import { GET_LOCATIONS, FETCHED_LOCATIONS, SELECTED_AREA, SELECTED_AREA_WEATHER } from './Models/Actions';

export const getLocations = () => ({
  type: GET_LOCATIONS
});

export const fetchedLocations = () => ({
  type: FETCHED_LOCATIONS
});
export const setSelectedArea = (selectedArea:string) => ({
  type: SELECTED_AREA,
  payload:selectedArea
});
export const setSelectedAreaWeather = (selectedAreaWeather:string) => ({
  type: SELECTED_AREA_WEATHER,
  payload:selectedAreaWeather
});