import React from 'react';

import bg from "../images/bg3.png";
import cat from "../images/cat.JPG";
import run from "../images/run.JPG";
import {makeStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ResponsiveDrawer from "./Nav.jsx";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    content:{
        flexGrow: 1,
        padding: theme.spacing(3),
        fontSize: 20,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%",

    },
    cardGrid: {

        paddingTop: theme.spacing(3),

    },
    media: {
        height: 180,
        maxWidth: 500,
    },
    card: {
        maxWidth: 500,
    },
    con:{
        align:'center',
        [theme.breakpoints.up('xs')]: {
            marginLeft: 5,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: 250,
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 250,
        }
    }
}));


const About = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <ResponsiveDrawer/>
            <div className={classes.con} >
            <Grid container className={classes.cardGrid} spacing={3} >
                <Grid item xs={10} sm={12} md={12}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={cat}
                            title="gyoza"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Meow
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                She is my lovely cat, Gyoza. She is cutest little kitten every. She love playing with people.

                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={10} sm={12} md={12} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={run}
                            title="card2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Half Marathon
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Scotiabank Toronto water front half Marathon. I enjoy running with my friend.
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
            </div>
        </main>

    );
}

export default About;

