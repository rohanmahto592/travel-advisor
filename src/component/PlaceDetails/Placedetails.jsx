import React from 'react'
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActionArea,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Icon from '@material-ui/core/Icon';
import useStyles from './style4';
import ReactCardFlip from 'react-card-flip'
const Placedetails = ({place,selected,refProp}) => {
    //console.log(place);
    //console.log(place.photo.images.large.url);
    if(selected) refProp?.current?.scrollIntoView({behavior:'smooth',block:"start"})
    const classes=useStyles();
    return (
        <Card elevation={10}>
            <CardMedia
            style={{height:350}}
            
            image={place.photo?place.photo.images.large.url:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                <Rating size="small" value={Number(place.rating)} readOnly/>
                  <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>  
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Price</Typography>
                  <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>  
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Ranking</Typography>
                  <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>  
                </Box>
                {
                    place?.awards?.map((award)=>{
                        return(
                            <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                            
                            <img src={award.images.small} alt={award.display_name}/>
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}
                            </Typography>
                        </Box>
                        )
                        

                        })
                }
                {
                place?.cuisine?.map(({name})=>{
                    return(
                        <Chip key={name} size="small"label={name} className={classes.chip}/>
                    )
                    

                })
                }
                {place?.address &&(
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon/> {place.address}
                        </Typography>
                )}
                {place?.phone &&(
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon/> {place.phone}
                        </Typography>
                )}
                <CardActions>
                    <Button size="small" color="inherit" onClick={()=>window.open(place.web_url,'_blank')}>
                        Travel Advisor
                    </Button>
                    <Button size="small" color="inherit" onClick={()=>window.open(place.website,'_blank')}>
                        Website
                    </Button>

                </CardActions>
            </CardContent>

            
        </Card>
        
       
    )
}

export default Placedetails
