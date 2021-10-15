import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Apply from './Apply'
import Apply1 from "./Apply1";
import About from './About'
import {Link} from 'react-scroll'
import { scroller } from "react-scroll";
import Card from "@material-ui/core/Card";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding:"10px",

    },
    root1: {
        display: "flex",
        flexDirection: "row",
        padding:"10px",

    },
    apply:{
        margin:'40px'
    },
    apply1:{
        marginBottom:'20px'
    },
    about:{
        marginBottom:'20px'
    }
}));

function Hackhaton() {



    const classes=useStyles();
    return(

<div className={classes.root}>
    <div >
        <Card className={classes.root1}>
        <div className={classes.about}>

            <About></About>
        </div>
        <div className={classes.apply1} onClick={scrollToSection}>
            <Apply></Apply>
        </div>
        </Card>
    </div>
    <div className="apply">
        <Apply1></Apply1>
    </div>

</div>
    );
}


const   scrollToSection = () => {
    scroller.scrollTo("apply", {
        duration: 1000,
        delay: 1,
        smooth: "easeInOutQuart",
    });
}


export default Hackhaton;


