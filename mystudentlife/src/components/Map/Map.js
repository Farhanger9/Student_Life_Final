import { useEffect, useState } from 'react';
import { MapContainer, TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet';
import {Form,FormControl,Button,Col } from 'react-bootstrap'
import Geocode from "react-geocode";
import './customLeaflet.css';
import { latLng,Icon} from 'leaflet';
import MarkerIcon from './marker.png'
import MarkerIcon2 from './icons8-map-48.png'

const position2 = [43.758683, -79.408785]
const position3 = [43.725912, -79.402773]
const position4 = [43.722097, -79.373811]
const position5 = [43.708354, -79.397053]
const position6 = [43.699511, -79.402773]
const position7 = [43.676087, -79.401116]
const position8 = [43.658851, -79.399111]
const position9 = [43.655738, -79.386813]
const position10 = [43.646291, -79.382598]
const position11 = [43.670053, -79.390425]
const position12 = [43.699376, -79.424576]
const position13 = [43.753743, -79.448517]
const position14 = [43.773275, -79.336065]


var globalLat = 0;
var globalLng = 0;
const newicon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [30, 30]
});
const newicon2 = new Icon({
  iconUrl: MarkerIcon2,
  iconSize: [30, 30]
});
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    
    keydown(event) {
      if(event.originalEvent.key === "Enter"){
        map.locate()
      }
     
     
    },
    locationfound(e) {
      setPosition(latLng(globalLat,globalLng))
      map.setView(latLng(globalLat,globalLng), 20)
    },
  })

  return null
}

export default function GetMap(){
 
  const defaultZoom = 5;
  
    const [validated, setValidated] = useState(false);

    const [searchString, setSearchString ] = useState("");
    const [Longitude,setLongitude] = useState(0);
    const [Latitude,setLatitude] = useState(0);
    const [NearbyPlaces,setNearbyPlaces] = useState([]);

    
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
    

    function handleChangePostalCode(e){
      
      setSearchString((e.target.value).replace(/ /g,''))
      
   
 }





    function handleSubmit(e){
  
  
      const postalCodeRegex = new RegExp(/^[K-P]\d[A-Z]\d[A-Z]\d$/i);
    
     
      if(postalCodeRegex.test(searchString) ){
        console.log('regex successful')

        Geocode.setRegion("ca");
        Geocode.fromAddress(searchString).then(
          (response) => {
          const {lat, lng}  = response.results[0].geometry.location;
            console.log(lat, lng);
            setLatitude(lat);
            setLongitude(lng);

            globalLat = lat;
            globalLng = lng;
            
           
           
          
             
          },
          (error) => {
            console.error(error);
          }
        );
        
          
       
      }else{
        
        setSearchString("")
        
        console.log('regex fail')
      }
      
      setValidated(true);

      e.preventDefault();

      
     }

     
     
    
    useEffect(() => {
   
      
      
      }, []);

     

 
    return (
      <>
 <Form validated={validated} onSubmit={handleSubmit} className='d-flex'>
 <Form.Group as={Col} md="3" controlId="validationCustom05">
    <FormControl type="text" placeholder="Enter Ontario Postal Code e.g L1A1A1" className="mr-sm-2" value={searchString}
   onChange={handleChangePostalCode} required />
      
   <Form.Control.Feedback type="invalid"> 
            Invalid Postal Code
          </Form.Control.Feedback>
          
          </Form.Group>  
          <span ><Button type="submit" variant="success">Set Postal Code</Button></span>
           Hover Over The Map and Press Enter To Zoom Toward Postal Location
    </Form>  
        
    <MapContainer center={[Latitude,Longitude]} zoom={defaultZoom} >
  <TileLayer
    
    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    apiKey= {process.env.REACT_APP_ARCGIS_API_KEY}
  />


   <Marker position={[Latitude,Longitude]} icon = {newicon2}>
   <Popup>You are here</Popup>
      
    </Marker>

    <Marker position={position2} icon = {newicon}>
      <Popup>Reframe Psychology Clinic</Popup>
    </Marker>

    <Marker position={position3} icon = {newicon}>
      <Popup>Mind Health Toronto</Popup>
    </Marker>

    <Marker position={position4} icon = {newicon}>
      <Popup>Sunnybrook Health Sciences</Popup>
    </Marker>

    <Marker position={position5} icon = {newicon}>
      <Popup> WMH Clinic <br></br> 647-343-4115</Popup>
    </Marker>

    
    <Marker position={position6} icon = {newicon}>
      <Popup> The Possibilities Clinic<br></br> 416-482-5558 </Popup>
    </Marker>

    <Marker position={position7} icon = {newicon}>
      <Popup> The Clinic on Dupont<br></br> 416-515-2649 </Popup>
    </Marker>

    <Marker position={position8} icon = {newicon}>
      <Popup> Psychosocial Rehabilitation<br></br> 416-535-8501 </Popup>
    </Marker>

    <Marker position={position9} icon = {newicon}>
      <Popup>Toronto Psychology Clinic<br></br> 613-690-6259 </Popup>
    </Marker>

    <Marker position={position10} icon = {newicon}>
      <Popup>BeWell Health Clinic<br></br> 416-367-8267 </Popup>
    </Marker>

    <Marker position={position11} icon = {newicon}>
      <Popup>Dr. Sandra R. Palef<br></br> 647-735-4254 </Popup>
    </Marker>

    <Marker position={position12} icon = {newicon}>
      <Popup>Whole Heart Mental Health & Wellness<br></br> 647-345-0661 </Popup>
    </Marker>

    <Marker position={position13} icon = {newicon}>
      <Popup>Dynamic Health - North York<br></br> 647-735-4268 </Popup>
    </Marker>

    <Marker position={position14} icon = {newicon}>
      <Popup>Dr. Joel Arthur Shapiro<br></br> 416-229-2399 </Popup>
    </Marker>

   
  
    <LocationMarker />

 
</MapContainer>

 </>     
    
 )
   
 

}
