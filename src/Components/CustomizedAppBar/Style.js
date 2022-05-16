import { makeStyles } from "@material-ui/core";

const drawerWidth = 240
export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        width: 'calc(100% - 281px)',
        marginLeft: '280px',
        [theme.breakpoints.down('sm')]: {
            
            marginLeft:'0px',
            width:'100%'
          },
    },
    container: {
        display: 'flex',
        minHeight: '92px',
        padding: '0 42px',
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    avatar: {
        height: '100%',
        width: '100%',
    },
    menuContainer: {
        width: '230px',
        outline: '0px',
        padding: '10px',
        boxSizing: 'borderBox',
        fontFamily: 'sans-serif'
    },
    classHeader: {
        '& > *': {
            marginLeft: theme.spacing(0.5),
            marginBottom: theme.spacing(1)
        },
        fontSize: '0.875rem',
        lineHeight: '1.57143',
        overflow: 'Hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        color: '#637381'
    },
    menuheader: {
        fontWeight: 'Bold'
    },
    menuButton:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
          display:'block'
          },

    },
    subHeader: {
        fontWeight: '400'
    },
    navData: {
        textDecoration: 'none',
        color: 'black',
        lineHeight: '1.57143',
        fontSize: '0.875rem',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        fontWeight: '400',
    },
    navHeader: {

        fontSize: '0.875rem',
        lineHeight: '1.57143',
        overflow: 'Hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        color: '#637381'
    },
    listItem: {
        paddingLeft: '4px',
        paddingTop: '1px',
        paddingBottom: '1px',
        marginTop: '1px',
        fontSize: '0.875rem',
        lineHeight: '1.57143',
        fontFamily: 'sans-serif',
        color: '#637381',
        borderRadius: '6px'
    },
    text: {

        "& span": {
            fontSize: '0.875rem !important',
            lineHeight: '1.57143 !important',
            fontFamily: 'sans-serif !important',
            color: '#637381 !important',
        }
    }
}))