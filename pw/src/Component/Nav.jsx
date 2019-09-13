import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Home from "./Home";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root:{

    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },


    menuButton: {

        marginRight: theme.spacing(2),
        opacity:0.7,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        opacity:0.6
    },
    content: {
        [theme.breakpoints.up("md")]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`
        }
    },

}));

export default function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                <ListItem button key={'empty'} component={Link} to="/">
                    <ListItemText primary={''} />
                </ListItem>
                <ListItem button key={'Home'} component={Link} to="/">
                    <ListItemText primary={'Home'} />
                </ListItem>

                <ListItem button key={'Project'} component={Link} to="/Project">
                    <ListItemText primary={'Project'} />
                </ListItem>
                <ListItem button key={'Contact'} component={Link} to="/Contact">
                    <ListItemText primary={'Contact'} />
                </ListItem>

            </List>
        </div>
    );


    return (
        <div className={classes.root}>
            <CssBaseline />
                <IconButton
                    aria-label="Open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
            <nav className={classes.drawer} aria-label="folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,

};