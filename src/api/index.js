import axios from 'axios';

  

export const getPlacesData=async(type,sw,ne)=>{
    try{
        //request
        const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
                params: {
                  bl_latitude:sw.lat,
                  tr_latitude:ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                  
                },
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'f0fd21093cmsh5d924a51c58c322p17e787jsna24dd14a3d34'
                }
            
        });
        console.log(data);
        return data;

    }
    catch(error){
      console.log(error);
    }
}