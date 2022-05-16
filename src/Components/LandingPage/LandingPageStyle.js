import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.down('sm')]: {
     
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    backgroundColor:theme.palette.primary.main,
    paddingBottom:'2%',
    '& > *': {
      margin: theme.spacing(2),
    },
    marginLeft: '280px', 
    width: 'calc(100% - 281px)',
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
        paddingBottom: '200px',
        marginLeft:'0px',
        width:'100%'
      },
  },
  cardContainer:{
    background:'#f9fafb',
    display:'flex',
    justifyContent:'space-between',
    left:'20px',
   
  },
  welcomeContainer:{
    textDecoration: 'none',
    color: 'black',
    lineHeight: '1.57143',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
       fontSize:'1.23rem',
       padding:'5px'
      },
    fontFamily: 'sans-serif',
    fontWeight: 600,
    width:'100%',
    padding:'20px',
    boxSizing:'border-box'
  },
  cardGrid:{
    minHeight:'240px',
      borderRadius: '20px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '14px'
      }
  }
}));