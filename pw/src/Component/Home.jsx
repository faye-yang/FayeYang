import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import self from "../images/self.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import bg from "../images/bg.png";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ResponsiveDrawer from "./Nav.jsx"


const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        fontSize: 20,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"

    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,

    },
    des:{
        fontSize: 20,
        align:'center',
        [theme.breakpoints.up('xs')]: {
            marginLeft: 50,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: 50,
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 250,
        },
    }
}));


export default function Home() {
    const classes = useStyles();
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
    return(
        <main className={classes.content}>
            <ResponsiveDrawer/>
            <div className={classes.des}>

            <Grid container alignItems="center" justify="center">
                <Avatar alt="selfie"  src={self}  className={classes.bigAvatar} />
            </Grid>
                <Typography className={classes.paragraph}>
                    <Typography align={"center"} variant="h3"  >Hello I'm</Typography>
                    <Typography align={"center"}  variant="h2" >Yufei Yang</Typography>
                    <Typography align={"center"} > I am a recent graduate from University of Toronto with strong background in computer science.</Typography>
                </Typography>
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
            </div>

        </main>
    )

}