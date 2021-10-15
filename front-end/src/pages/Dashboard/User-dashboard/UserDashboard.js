import React from 'react';
import {Box, Button, Grid, Typography, withStyles} from '@material-ui/core';
import backEndApi from "../../../services/api";
import AccountInfo from "./AccountInfo";
import eventCard from './UserCard';
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


class userDashboard extends React.Component {
    state = {eventDocs: [], userDetail: '', isSwitchOn: false, isHovering: false, hoveredLaunch: ''};
    componentWillMount = async () => {
        const config = {
            headers: {
                'x-access-token': JSON.parse(localStorage.getItem('token')).token
            }
        };
        const response = await backEndApi.get('/dashboard', config);
        this.setState({eventDocs: response.data.eventDocs, userDetail: response.data.docs[0]});

    };

    render() {
        if (!this.state.eventDocs) {
            window.location.reload()

        }
        const {classes} = this.props;

        return (
            <Grid container className={classes.root} spacing={4}>
                <Grid item md={9}>
                    <Box>

                        <Container><Grid container style={{marginBottom: '5px'}}>

                            <Grid item xs={6} sm={6} md={6}></Grid>
                            <Grid item xs={3} md={3} align='right'>
                                <Button id="addNewEvent" href='/addevent' style={{
                                    background: '#2c79e4',
                                    textTransform: 'none',
                                    color: '#F2EDD7',
                                    borderRadius: '5px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                }}>+ Add event</Button>
                            </Grid>
                        </Grid></Container>
                        <Container>
                            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                                {this.state.eventDocs ? this.state.eventDocs.map((event) => {
                                    return <eventCard eventDetail={event}/>
                                }) : ''}
                            </div>
                        </Container>
                    </Box>
                </Grid>
                <Grid item md={3} style={{marginTop: '2px'}}>
                    <AccountInfo userDetail={this.state.userDetail}/>
                </Grid>
            </Grid>
        );
    }

}

export default withStyles(useStyles)(userDashboard);


