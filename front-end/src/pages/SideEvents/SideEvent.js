import {
    withStyles,
    Typography,
} from "@material-ui/core";
import React , {Component} from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import Card1 from "./Card1";
import Event from "../ShowEvents/Event";


const useStyles = (theme) => ({

    root: {
        display: "flex",
        margin: "2em",
        gridTemplateColumns: "5fr 2fr",
        gridColumnGap: "20px",
    },

    paragraphStyling: {
        lineHeight: "1.5",
        padding: "20px",
        margin: "20px",
        textTransform: "full-width",
        fontFamily: "Times New Roman",
        boxSizing: "border-box",
    },
    register:{
        borderRadius:'12px'
    }
    ,
    btn:{
        marginLeft:'460px'
    }
    ,
    feedback:{
        marginBottom:'15px',
    }


});

class SideEvent extends Component{

    render(){

        const { classes } = this.props;
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Event></Event>
            </div>
            <Typography variant="h6" style={{display:'flex',justifyContent:'center',marginTop:'2%'}} >Side Events</Typography>
            <div className={classes.root} >
                <Card > <CardContent>
                    <Typography variant="h6" style={{ margin: "2em", lineHeight: "1.5" }} className={classes.paragraphStyling}>
                        The objective of side events is to inspire the youth generation to have a cause to stand for and let them be aware opportunities eventually find its way for those who hassle the most.
                        This year, the blend effect of our event, onsite & virtual, will bring together creative minds & seasoned practitioners from every corner of thee globe to contribute ideas that worth sharing.
                    </Typography>
                </CardContent></Card>
                <Card> <CardContent>
                    <Typography variant="h6" style={{ margin: "2em", lineHeight: "1.5" }} className={classes.paragraphStyling}>
                        Introductive seminars, workshops, & competitions, are the main part of side-events that will allow students creativity get a chance to be recognized in public, creating an opportunity for their work to be part of solutions for social challenges.
                        Furthermore, well-seasoned invited practitioners from every corner of the globe take part on sharing life-long wisdoms, either on-stage or virtual, are also unique values the event offers for the scholar community.
                    </Typography>
                </CardContent></Card>
            </div>
            <Button onClick="/Hackhaton" variant="contained" color="primary" className={classes.btn}>
                Registration is now open!
            </Button>
            <div className={classes.root}>
                <Card><CardContent>
                    <Typography>
                        <ul>
                            <Typography variant="h5">Competitions</Typography>
                            <li>Chess Competition</li>
                            <li>Hackathon Competition in collaboration with intellectual international school.</li>
                            <li>Math Olympics Competition</li>
                            <li>Maze Competition</li>
                            <li>Eleni Mohammed Poem & Writing Competition</li>
                            <li>Virtual Coffee Debate Contest</li>
                        </ul>
                    </Typography>
                </CardContent></Card>
                <Card1></Card1>
                <Card><CardContent>
                    <Typography variant="h5" style={{display:'flex',justifyContent:'center'}}>Entertainments</Typography>
                    <Typography>
                        <ul className={classes.Entertainments}>
                            <Typography style={{display:'flex',margin:'5%',maxWidth:'60%'}}>Although we take our job seriously, Fun is a part of life and hear are some Ethiopian style.</Typography>
                             <ol style={{display:'flex',justifyContent:'end',flexDirection:'column'}}>
                                 <li >Talent Show Performance</li>
                                 <li >Health & Yoga Sessions</li>
                                 <li >City Tour  & Retreat Programs</li>
                             </ol>
                        </ul>
                    </Typography>
                </CardContent></Card>
            </div>
            <div>

            </div>

        </div>

    );
}

}
export default withStyles(useStyles, { withTheme: true })(SideEvent);

