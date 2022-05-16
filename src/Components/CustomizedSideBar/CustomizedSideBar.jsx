import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx'
import useStyles from './Styles'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '../../Assets/avatar.jpg'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Paper } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { CardTravel, Dashboard } from '@material-ui/icons';
import ReceiptIcon from '@material-ui/icons/Receipt';
export default function CustomizedSideBar(props) {



    const classes = useStyles()

    const getIcon = (icon) => {
        switch (icon) {
            case 'Dashboard':
                return (<Dashboard></Dashboard>)
            case 'Travel':
                return (<FlightTakeoffIcon></FlightTakeoffIcon>)
            case 'Transactions':
                return (<ReceiptIcon></ReceiptIcon>)
            default:
                return (<CardTravel></CardTravel>)
        }
    }
    console.log(props.menuOpen)
    return (
        <React.Fragment>
            <div className={clsx(classes.sidebar, {
                [classes.displayIt]: props.menuOpen,
            })}>
            <div className={classes.LogoContainer}>
                <Paper elevation={0} className={classes.LogoPage}>
                    Expensio
                </Paper>
            </div>
            <div className={classes.userContainer}>
                <Paper elevation={0} className={classes.userPaper}>
                    <div className={classes.avatarContainer}>
                        <img src={Avatar} className={classes.avatar} alt="" />
                    </div>
                    <div className={classes.userNameContainer}>
                        <span className={classes.typo}>
                            Guru Mahesh
                        </span>
                    </div>
                </Paper>
            </div>
            <List className={classes.listContainer}>
                {[{ text: 'Dashboard', icon: 'Dashboard', link: '/Dashboard' }, { text: 'Travel', icon: 'Travel', link: '/Travel' }, { text: 'Transactions', icon: 'Transactions', link: '/Transactions' }, { text: 'Histore', icon: 'con', link: '/History' }].map((obj, index) => (
                    <NavLink to={obj.link} className={(navData) => (navData.isActive ? classes.activeClass
                        : classes.listLink)} key={obj.text} >
                        <ListItem button  >
                            <ListItemIcon>{getIcon(obj.icon)}</ListItemIcon>
                            <ListItemText primary={obj.text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>

        </div>
        
            {/* <AppBar position="fixed" className={classes.appBar}>
            
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer> */}
        </React.Fragment >

    )
}
