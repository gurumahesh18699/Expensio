import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
    root: {
      
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paperContainer:{
        display:'flex',
        width:'95%',
        padding:'10px 0',
        boxSizing:'border-box',
        flexWrap:'wrap',
        height:'100%',
        [theme.breakpoints.down('sm')]: {
           width:'100%'
          },
    },
    header:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:'10px',
        boxSizing:'border-box'
    
    },
    titleContainer:{
        fontFamily: 'sans-serif',
        fontWeight: '600',
        fontSize: '1.0rem',
        [theme.breakpoints.down('sm')]: {
            fontSize:'0.9rem',
            
           },
        color: '#838484'
    },
    valueContainer:{
        padding:'10px',
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    value:{
        fontFamily: 'sans-serif',
        fontWeight: '600',
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize:'1.6rem',
            
           },
        color: 'black'
    },
    subValueContainer:{
        padding:'10px',
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    subValue:{
        fontFamily: 'sans-serif',
        fontWeight: '600',
        fontSize: '0.875rem',
        [theme.breakpoints.down('sm')]: {
            fontSize:'0.7rem',
            
           },
        color: '#838484'
    }

}));