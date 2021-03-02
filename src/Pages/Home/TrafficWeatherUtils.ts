
import labels from '../../Assets/i18n/en.json';

export class TrafficWeatherUtils {
    dateTimeChange = (event, field,props) =>{
        switch(field){
            case 'date' :
                props.dateChanged(event.target.value);
                break;
            case 'time' :
                props.timeChanged(event.target.value);
                break;
            default: break;
        }
        
        props.getAllLocations();
        props.getAllLocationImages();
        props.setSelectedAreaWeather(labels.noData);
        props.setSelectedArea({name:labels.selectLocation});
        props.setSelectedLocationImage(false);
    };
    locationChange = (textInput:any,locations:any[],props:any)=>{
        let locationWeather:any = labels.noData;
        let selectedVal:any = textInput.current||'';
        selectedVal = selectedVal.value;
        let selectedArea:any = locations.filter((obj)=>obj.name === selectedVal);
        selectedArea = selectedArea.length && selectedArea[0];

        props.setSelectedArea(selectedArea);
        locationWeather = props.areaWeatherData.filter((obj)=> obj.area === selectedVal);
        locationWeather = (locationWeather.length&&locationWeather[0].forecast)||labels.noData;        
        props.setSelectedAreaWeather(locationWeather);
        let nearestLoaction = this.getNearestLocation(props.areaImageData,selectedArea);
        if(!nearestLoaction){
            props.setSelectedArea({name:labels.selectLocation});
            props.setSelectedLocationImage(false);
        }else{
            props.setSelectedLocationImage(this.getNearestLocation(props.areaImageData,selectedArea));
        }
    };
    getNearestLocation = (locationImages:any[],selectedArea:any) => {
        
        const areaLoc = selectedArea.label_location;
        let nauticalDistance:any;
        const nearestLocations = areaLoc && Object.keys(areaLoc).length && locationImages&&locationImages.map((obj,indx) => {
            const camLocation = obj.location;
            const areaDistance = this.haversine_distance(camLocation.latitude, camLocation.longitude, areaLoc.latitude, areaLoc.longitude);
            if(!nauticalDistance){
                nauticalDistance = {distance:areaDistance, index:indx};
            }else if(areaDistance < nauticalDistance.distance){
                nauticalDistance.distance=areaDistance;
                nauticalDistance.index=indx;
            }
            return obj;
        });
        if(!nearestLocations || !nearestLocations.length){
            return false;
        }
        return nearestLocations[nauticalDistance.index];
    }
    haversine_distance = (lat1:number, lon1:number, lat2:number, lon2:number) => {
        //source:https://cloud.google.com/blog/products/maps-platform/how-calculate-distances-map-maps-javascript-api
        var R = 3958.8; // Radius of the Earth in miles
        var rlat1 = lat1 * (Math.PI/180); // Convert degrees to radians
        var rlat2 = lat2 * (Math.PI/180); // Convert degrees to radians
        var difflat = rlat2-rlat1; // Radian difference (latitudes)
        var difflon = (lon1-lon2) * (Math.PI/180); // Radian difference (longitudes)

        var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return d;
    }
}

export default TrafficWeatherUtils
