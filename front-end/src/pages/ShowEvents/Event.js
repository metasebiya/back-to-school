import React from 'react';
import {Box, Button, Grid, Typography, withStyles} from '@material-ui/core';
import backEndApi from '../../services/api'
import EventCard from './EventCard';
import Container from "@material-ui/core/Container";


const useStyles = theme => ({
    root: {
        marginTop: '20px',


    },
    table: {
        minWidth: 650,

    },
    tableContainer: {
        padding: '12px',
        borderRadius: '5px',
        backgroundColor: '#F2EDD7',
        overflow: 'visible'


    },
    margin: {
        margin: '5px',
        fontSize: '15px',
        borderRadius: '4px',
        "&:hover": {backgroundColor: '#3A6351'},
    },
    iconBackgroundRed: {
        backgroundColor: 'rgba(228,130,87,0.21)'
    },
    deleteIcon: {
        color: '#F24545'
    },
    editIcon: {
        color: '#E48257'

    },
    iconBackgroundBlack: {
        backgroundColor: 'rgba(57,50,50,0.2)'
    },
});


class Event extends React.Component {
    state = {eventDocs: [],  isSwitchOn: false, isHovering: false, hoveredLaunch: ''};
    componentWillMount = async () => {
        console.log('cddoming')

        const response = await backEndApi.get('/showEvent');
        this.setState({eventDocs: response.data});
        console.log(response, 'coming')
    };

    render() {
        // if (!this.state.eventDocs) {
        //     window.location.reload()
        // }
        const {classes} = this.props;

        return (
            <div style={{backgroundColor:'#f5f8f8'}}>
            <Grid container className={classes.root} spacing={4}>
                <Grid item md={19} style={{padding:'20px'}}>
                    <Typography variant='h5' style={{display:'flex',justifyContent:'center',marginTop:'3%',backgroundColor:'#ee992d',width:'450px',fontSize:'25px',marginLeft:'35%',borderRadius:'12px'}}>New events will appear here</Typography>

                    <Box item md={9} >
                        <Container>
                            <div style={{display: 'flex', gap: '20px', flexWrap: 'noWrap',padding:'20px',paddingRight:'34px', overflowX:'scroll'}}>
                                {this.state.eventDocs ? this.state.eventDocs.map((event) => {
                                    return <EventCard eventDetail={event}/>
                                }) : ''}
                            </div>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
            </div>
        );
    }

}

export default withStyles(useStyles)(Event);






