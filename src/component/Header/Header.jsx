import React,{useState} from 'react'
import {Autocomplete} from '@react-google-maps/api';
import {AppBar,Toolbar,Box,Typography,InputBase}from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style1.js';
const Header = ({setcoordinates}) => {
    // const[autocomplete,setautocomplete]=useState(null);
    const classes=useStyles();
    // const onLoad=(autoC)=>setautocomplete(autoC);
    
    // const onPlaceChanged=()=>{
    //     //console.log(autocomplete.getPlace()?.geometry.location);
    //     var place=autocomplete.getPlace();
    //     var lat = place.geometry.location.lat();
    //     var lng = place.geometry.location.lng();
    //     console.log(lat);
    //     // const lng=autocomplete?.getPlace().geometry.location.lng();

    //      setcoordinates({lat,lng});
    // }
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5"className={classes.title}>
                    Travel Advisor

                </Typography>
                <Box display="flex">
                    <Typography variant="h6"className="classes.title">
                        Explore new places..
                    </Typography>
                    {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
                       <div className={classes.search}>
                           <div className={classes.searchIcon}>
                               <SearchIcon/>
                            </div>
                            <InputBase placeholder="search...." classes={{root:classes.inputRoot,input:classes.inputInput}}/>

                            
                        </div> 
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default Header
