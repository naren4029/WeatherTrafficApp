export const GET_LOCATION_IMAGES = 'GET_LOCATION_IMAGES';
export const FETCHED_LOCATION_IMAGES = 'FETCHED_LOCATION_IMAGES';
export const SELECTED_LOCATION_IMAGE = 'SELECTED_LOCATION_IMAGE';

interface GetLocationImagesAction {
  type: typeof GET_LOCATION_IMAGES;
}
interface FetchedLocationImagesAction {
  type: typeof FETCHED_LOCATION_IMAGES;
  json: any;
}
interface SelectedLocationImageAction {
  type: typeof SELECTED_LOCATION_IMAGE;
  payload: string;
}
export type GetLocationImagesActionTypes = GetLocationImagesAction | FetchedLocationImagesAction |SelectedLocationImageAction;
