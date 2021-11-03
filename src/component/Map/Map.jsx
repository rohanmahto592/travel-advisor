import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import {CssBaseline,Grid}from '@material-ui/core';
import useStyles from './style3.js';
import mapStyles from "./mapStyles";
import { borderRadius } from '@mui/system';
const Map = ({setcoordinates,setbounds,coordinates,places}) => {
    const [mapStyle, setMapStyle] = useState([]);

    const updateMapStyle = (style = "") => setMapStyle(mapStyles[style] || []);
    const classes=useStyles();
    const isDesktop=useMediaQuery('(min-width:600px)');
    
    return (
        <div className={classes.mapContainer}>
            <div className="col mb-3 col-12 text-center">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        <button
                            type="button"
                            className="btn btn-light border-dark"
                            onClick={() => updateMapStyle()}
                            style={{border:'none',color:'black',backgroundColor:'#ADADAD',borderRadius:'8px',marginRight:'10px',width:'80px',height:'30px',marginTop:'8px',boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.13)',cursor:'pointer'}}
                        >
                            Default
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark border-dark"
                            onClick={() => updateMapStyle("dark")}
                            style={{border:'none',color:'whitesmoke',backgroundColor:'#6e4D38',borderRadius:'8px',marginRight:'10px',width:'80px',height:'30px',marginTop:'8px',boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.13)',cursor:'pointer'}}
                        >
                            Dark Mode
                        </button>
                        <button
                            type="button"
                            className="btn btn-light border-dark"
                            onClick={() => updateMapStyle("light")}
                            style={{border:'none',color:'whitesmoke',backgroundColor:'#9999CC',borderRadius:'8px',marginRight:'10px',width:'80px',height:'30px',marginTop:'8px',boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.13)',cursor:'pointer'}}
                        >
                            Light Mode
                        </button>
                    </div>
                </div>
                <div
                    className="col text-center"
                    style={{ width: "100%",height:'20px'}}
                ></div>
            <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyDnKopjozCpJvQH_TbstFEGwhcxtWv4S3U'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={16}
                
                margin={[50,50,50,50]}
                 options={{ styles: mapStyle }}
                onChange={(e)=>{
                    //console.log(e);
                    setcoordinates({lat:e.center.lat,lng:e.center.lng});
                    setbounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
                }}
                onChildClick={''}
                >
                   
                       
                          
            <Grid container spacing={2} style={{width:"100%"}}>
                {places?.map((place,i)=>{
                    return(
                        <Grid elevation={6} item vs={5}>
                    <div
                        className={classes.markerContainer}
                        lat={Number(places.latitude)} 
                        lng={Number(place.longitude)} 
                        key={i}
                        
                       >
                           {
                           !isDesktop?(
                               <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                           ):
                           (
                               <Paper elevation={3} className={classes.paper}>
                                   <Typography gutterBottom variant="subtitle2" className={classes.typography}>
                                       {place.name}
                                   </Typography>
                                   <img 
                                   className={classes.pointer}
                                   src={place.photo ? place.photo.images.large.url:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'} 
                                   alt={place.name} 
                                    />
                                    <Rating size="small" value={Number(place.rating)} readOnly/>
   
                               </Paper>
   
                           )
                       }
   
                       </div>
                    </Grid>
                )})}
                </Grid>
            </GoogleMapReact>
        
        </div>
    )
}

export default Map
