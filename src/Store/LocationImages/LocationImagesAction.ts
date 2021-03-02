import { GET_LOCATION_IMAGES, FETCHED_LOCATION_IMAGES, SELECTED_LOCATION_IMAGE} from './Models/Actions';

export const getLocationImages = () => ({
  type: GET_LOCATION_IMAGES
});

export const FetchedLocationImages = () => ({
  type: FETCHED_LOCATION_IMAGES
});

export const setSelectedLocationImage = (selectedImageData:any) => ({
  type: SELECTED_LOCATION_IMAGE,
  payload:selectedImageData
});