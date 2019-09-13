import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from "./Nav.jsx"
import bg from "../images/bg_contact.png";
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles(theme => ({
    contact: {
        flexGrow: 1,
        padding: theme.spacing(3),
        fontSize: 20,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"
    },
    des:{
        padding:30,
        fontSize: 30,
        color:"white",
        fontFamily:"Comic Sans MS",
        align:'center',

        [theme.breakpoints.up('xs')]: {
            marginLeft: 50,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: 250,
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 300,
        },
    }
}));
const Contact = () => {
    const classes = useStyles();
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
    return(
        <main className={classes.contact}>
            <ResponsiveDrawer/>

            <div className={classes.des}>
                <p className="mb-4"> Get In Touch.</p>
                <br></br>
                <p>Thanks for your interest in contacting me.  </p>
                <p> You can find me on  <a href="https://www.linkedin.com/in/yufei-yang-1a420a123/">LinkedIn</a></p>
                    <p>My recent projects will actively update on <a href="https://github.com/faye-yang">github</a>. </p>
                <br></br>

            </div>
            <footer>
                <Grid container alignItems="center" justify="center">
                    <List style={flexContainer}>
                        <ListItem>
                            <a href="https://github.com/faye-yang"><FontAwesomeIcon icon={faGithub} color="Grey" size="lg" /> </a>
                        </ListItem >
                        <ListItem >
                            <a href="https://www.linkedin.com/in/yufei-yang-1a420a123/"><FontAwesomeIcon icon={faLinkedin} color="Grey" size="lg"/> </a>
                        </ListItem>
                    </List>
                </Grid>
            </footer>

        </main>

    );
}

export default Contact;

