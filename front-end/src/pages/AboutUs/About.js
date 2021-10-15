import {
    withStyles,
    Typography, Grid,
} from "@material-ui/core";
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import AboutCard from "./AboutCard";
import AboutCard1 from "./AboutCard1";
import AboutCard2 from "./AboutCard2";
import AboutCard3 from "./AboutCard3";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import FeedBack from "./FeedBack";
const useStyles = (theme) => ({

    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
    ,
    root: {
        display: "flex",
        flexDirection: "column",
        flexWrap: 'nowrap',
        flexFlow: "column wrap",

    },
    root1: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        flexFlow: "column wrap",
        marginTop:'15px',
        marginBottom:'15px',
        padding:'20px'
    },
    contact:{
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        flexFlow: "column wrap",
    },
    paragraphStyling: {
        lineHeight: "1.5",
        padding: "20px",
        margin: "20px",
        textTransform: "full-width",
        fontFamily: "Times New Roman",
        boxSizing: "border-box",
    },

    container:{
        display: "flex",
        flexDirection: "column",
        flexWrap: 'nowrap',
        flexFlow: "column wrap",
        marginLeft: "-10px",
        maxWidth: '100%',
        overflowX: 'hidden',
    },
    about:{
        width:'500px',
        height:'500px'
    },
    email:{
        marginTop: '20px',
        padding: '30px'

    },
    logo:{
        width:'300px',
        height:'300px',
        marginTop: '18px'
    },
    aboutContent:{
        backgroundColor:'gray',
    }

});
class About extends Component {
    onSubmit = (email, feedback) => {
        console.log(email, feedback);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.root}>

                    <div>
                        <div  style={{ margin: "1em " }}>

                                <Typography variant="h5" style={{display:'flex',justifyContent:'center'}}>  OVERVIEW:</Typography>
                                <Typography variant="h6" style={{  lineHeight: "1.5" }} className={classes.paragraphStyling}>
                                    Noosphere Affairs Trading Plc. is established with the vision of contributing to the national efforts of making an empowered and productive generation that strives to contribute to the continuous betterment of livelihoods.
                                    Being Education & Technology the main pillars, Noosphere brings various stakeholders and partners together to play their share, thus positively impact the wider public in Ethiopia, Africa and the world at large.
                                    It is determined to come up with innovative initiatives on various socio-economic and cultural affairs by organizing a range of expos, conference, festivals, and other social events.

                                </Typography>

                        </div>
                    </div>


                    <div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',margin:'10px'}}>
                            {/*<Avatar alt="Remy Sharp" src="/asset/img/about.png" className={classes.about}/>*/}

                        </div>
                    </div>
                </div>
                    <Card className={classes.root1}>
                        <AboutCard></AboutCard>
                        <AboutCard1></AboutCard1>
                        <AboutCard2></AboutCard2>
                        <AboutCard3></AboutCard3>
                    </Card>
                <div>
                    <FeedBack></FeedBack>
                </div>


            </div>

        );
    }
}

export default withStyles(useStyles, { withTheme: true })(About);
