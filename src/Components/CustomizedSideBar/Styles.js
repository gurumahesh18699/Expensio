import { makeStyles } from "@material-ui/core";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { hover } from "@testing-library/user-event/dist/hover";
const drawerWidth = 240
export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    displayIt:{
        display:'block !important'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        background: 'ebf4fa'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    sidebar: {
        margin: '0',
        padding: '0',
        width: '280px',
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            // styles
            display:'none'
          },
        position: 'fixed',
        height: '100%',
        overflow: 'auto',
        borderRight: '1px dashed rgba(145, 158, 171, 0.24)',
        zIndex:'4000'
       
    },
    LogoContainer: {
        padding: '24px 20px',
        boxSizing: 'border-box',
        display: 'inline-flex',
        width: '100%'
    },
    LogoPage: {
        width: '100%',
        padding: '10px',
        fontFamily: "sans-serif",
        letterSpacing: '1px',
        fontSize: '25px',
        display: 'flex',
        fontWeight: 'bold',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main
    },
    userContainer: {
        marginBottom: '40px',
        marginLeft: '20px',
        marginRight: '20px'
    },
    userPaper: {
        width: '100%',
        minHeight: '72px',
        padding: '5px',
        fontFamily: "sans-serif",
        letterSpacing: '1px',
        fontSize: '25px',
        display: 'flex',
        fontWeight: 'bold',
        alignItems: 'center',
        backgroundColor: '#edeff2',
        padding: '16px 20px',
        borderRadius: '12px',
        boxSizing: 'border-box'
    },
    avatarContainer: {
        borderRadius: '50%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: '40px',
        height: '40px',
        fontFamily: 'sans-serif',
        fontSize: '1.25rem',
        lineHeight: 1,
        overflow: 'hidden',
        userSelect: 'none',
    },
    userNameContainer: {
        marginLeft: '16px'
    },
    avatar: {
        height: '100%',
        width: '100%',
    },
    typo: {
        fontFamily: 'sans-serif',
        fontWeight: 'Bold',
        margin: '0px',
        lineHeight: '1.57143',
        fontSize: '0.83rem',
        color: '#637381'
    },
    listContainer: {
        paddingLeft: '8px',
        paddingRight: '8px'
    },
    listLink: {
        textDecoration: 'none',
        color: 'black',
        lineHeight: '1.57143',
        fontSize: '0.875rem',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        "&:active": {
            backgroundColor: 'white',
            color: 'blue'
        }
    },
    activeClass: {
      
      
        textDecoration: 'none',
        lineHeight: '1.57143',
        fontSize: '0.875rem',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        "& > *": {
            backgroundColor: '#e8eef7 !important',
            color: '#3876d6 !important',
        }
    }
}))