import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    marginBottom:'5vh',
    
    height: '100%', width: '100%',
  },
  markerContainer: {
     transform: 'translate(-450%, -180%)', zIndex: 1, '&:hover': { zIndex: 2 },
     boxShadow:'5px 10px #F1E1CC',
  },
  pointer: {
    cursor: 'pointer',
  },
}));