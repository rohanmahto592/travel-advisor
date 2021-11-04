
import './App.css';
import {CssBaseline,Grid}from '@material-ui/core';
import Header from './component/Header/Header';
import List from './component/List/List';
import Map from './component/Map/Map';
import { getPlacesData,weatherData } from './api/index.js';
import {useEffect,useState} from 'react';
function App() {
  const[type,setType]=useState("restaurants");
  const[places,setplaces]=useState([]);
  const[coordinates,setcoordinates]=useState({});
  const[bounds,setbounds]=useState({});
  const[childClicked,setChildClicked]=useState(null);
  const[isLoading,setIsLoading]=useState(false);
  const[rating,setRating]=useState('');
  const[weatherdata,setweatherdata]=useState([]);
  const[filteredplaces,setfilteredplaces]=useState([]);

  //forcurrent position that will be called once while the map get loaded
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setcoordinates({lat:latitude,lng:longitude});
    });
  },[]);
  useEffect(()=>{
    const filterplaces=places.filter((place)=>place.rating>rating);
    setfilteredplaces(filterplaces);

  },[rating])
  //called againand again when ever we will click for diffrent positions
  useEffect(()=>{
    if(bounds.sw && bounds.ne)
    {
    setIsLoading(true);
      weatherData(coordinates.lat,coordinates.lng).then((data)=>{
      setweatherdata(data);
    });
    getPlacesData(type,bounds.sw,bounds.ne).then((data)=>{
      //console.log(data);
      //console.log(coordinates);
      setplaces(data?.filter((place)=>place.name && place.num_reviews>0));
      
      setIsLoading(false);
    })
  }
  },[type,bounds]);
  return (
    <>
      <CssBaseline/>
      <Header setcoordinates={setcoordinates}/>
      <Grid container spacing={3} style={{width:'100%',backgroundColor:'whitesmoke',}}>
        <Grid item xs={12} md={4} >
          <List places={filteredplaces.length?filteredplaces:places}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          childClicked={childClicked}
          isLoading={isLoading} 
          
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
          setcoordinates={setcoordinates} setbounds={setbounds} coordinates={coordinates}
          places={filteredplaces.length?filteredplaces:places},weatherdata={weatherdata}/>
        </Grid>

      </Grid>
    </>
  );
}

export default App;
