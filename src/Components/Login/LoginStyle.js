
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight:'100vh',
     
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    img:{
        width:'100%',
       
    },
    imgContainer:{
        display:'flex',
        width:'100%',
        justifyContent:'Center'
    },
    imgGrid:{
        background:'rgb(255 242 239)',
        display:'flex',
        justifyContent:'Center',
        alignItems:'Center',
    },
    rightContainer:{
        display:'flex',
        justifyContent:'Center',
        alignItems:'Center',
    },
    signupContainer:{
        padding: '20px',
        /* box-sizing: Border-Box; */
        minHeight: '250px',
        width: '40%',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'center'
    },
    typoContainer:{
        width: '100%',
        fontWeight: '1000',
        display: 'flex',
        justifyContent: 'center',
        height: '20%'
    },
    buttonContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'2px',
        margin:'5px'
    }

  }));