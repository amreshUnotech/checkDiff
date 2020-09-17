import React from 'react';
import {Box,CircularProgress,makeStyles,Typography} from '@material-ui/core';

const useStyles = makeStyles(() => ({
   
    labelValue:{
        fontSize:'1.75rem'
    }
    
   
  }))

const CircularProgressWithLabel=(props)=> {
    const classes = useStyles()
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={classes.labelValue} variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.mainvalue,
          )}`}</Typography>
        </Box>
      </Box>
    );
  }
  
  
  const TimerLoader = ({min=0,max=60,...props}) => {
    const [progress, setProgress] = React.useState(min);
    const normalise = value => (value - min) * 100 / (max - min);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => ((prevProgress) >= 60 ? 0 : prevProgress + 1));
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);
  

     

    return <CircularProgressWithLabel value={normalise(progress)} mainvalue={progress} {...props} />;
  }
  export default TimerLoader;