import React from 'react'
import useStyles from './Style'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '../../Assets/avatar.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import { Paper } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import ListItem from '@material-ui/core/ListItem';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
export default function CustomizedAppBar(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event) => {

    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div>
                    <IconButton onClick={props.handleMenuBar} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className={classes.leftContainment}>
                    <div className={classes.avatarContainer} onClick={handleMenu} aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true">
                        <img src={Avatar} className={classes.avatar} alt="" />
                    </div>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        getContentAnchorEl={null}
                        open={open}
                        onClose={handleClose}

                    >
                        <div className={classes.menuContainer}>
                            <div className={classes.classHeader}>
                                <div className={classes.menuheader}>
                                    <span>Guru Mahesh</span>
                                </div>
                                <div className={classes.subHeader}>
                                    <span> gurumahesh013@gmail.com </span>
                                </div>
                            </div>
                            <Divider></Divider>
                            <div className={classes.subMenuContainer}>
                                <div className={classes.navHeader}>
                                    {[{ text: 'Home', icon: '', link: '/Dahsboard' }, { text: 'Profile', icon: '', link: '/Profile' }, { text: 'Settings', icon: 'Travel', link: '/Settings' }].map((obj, index) => (
                                        <div style={{ margin: '5px 0' }} key={obj.text}>
                                            <NavLink className={classes.navData} to={obj.link} >
                                                <ListItem button className={classes.listItem} >
                                                    <ListItemText primary={obj.text} className={classes.text} />
                                                </ListItem>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Divider></Divider>
                            <div className={classes.subMenuContainer}>
                                <div className={classes.navHeader}>
                                    <div style={{ margin: '5px 0' }}>
                                        <ListItem button className={classes.listItem} >
                                            <ListItemText primary='Logout' className={classes.text} />
                                        </ListItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Menu>
                </div>
            </div >
        </header >
    )
}
