import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
    Container:{
        background:theme.palette.primary.main
    },
    backdrop: {
        zIndex: 40001,
        color: '#fff',
      },
      overlay:{
        position: 'fixed',
        width: '100%',
        display: 'none',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '3000',
        cursor: 'pointer',
      },
      overlayFix:{
        display:'block'
      }
}))