import React from 'react';
//import './MainPage.css';
import ResponsiveDrawer from "./Nav.jsx"
import {makeStyles} from "@material-ui/core";
import bg from "../images/bg3.png";


const useStyles = makeStyles(theme => ({
    content:{
        flexGrow: 1,
        padding: theme.spacing(3),
        fontSize: 20,
        backgroundColor:"#D3E1E2",
        minHeight: "100%",

    },
    des:{
        color:"white",
        fontFamily:"Comic Sans MS",
        align:'center',
        [theme.breakpoints.up('xs')]: {
            marginLeft: 5,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: 220,
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 250,
        }

    }

}));



const Project = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <ResponsiveDrawer/>
            <div className={classes.des}>

                <h3> Projects </h3>
                <h4> Web application for partner organization: </h4>
                <p>
                    A web application that help non profit organization, Action Against Hunger Canada,
                    educate and connect students with nutrient science across the world.
                    It's implemented using Angular2, node.js, firebase.

                </p>
                <h4>Photo Renamer: </h4>
                <p>
                    The project develops a Java application with GUI such that user can modify the image name,
                    file path, deleting images, and attach image with some tags. Using the tag, images with the
                    same tag can be group and users can search images by tag.
                </p>
                <h4> Research student: </h4>
                <p>
                    Development of K-mer Based Alignment-free Pipeline and its database  at Public Health Ontario.
                    designing a database and using PosgreSQL with psycog2 and hash table with chaining, to find the common sub-sequence of RNA.
                </p>

            </div>
        </main>

    );
}

export default Project;

