import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {Redirect} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import backEndApi from '../../services/api'
import {withStyles} from "@material-ui/styles";

const useStyles = theme => ({
    root: {
        marginBottom: '10%',
        display:'flex',
        justifyContent:'center',

    },
    rootm:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        width:'70%',
        alignItems:'center'
    },
    firstGrid: {
        display: 'flex',
        justifyContent: 'center',
        background: '#EEEEEE',
        boxShadow: '-9px 18px 16px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
    },

    input: {
        padding: '10px',
        marginTop: '5px',
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        border: '0.5px solid #9e9e9e',
        background: '#EEEEEE',
        "&::-webkit-input-placeholder": {
            color: 'rgba(57,50,50,0.3)'
        },

        "&::-moz-placeholder": { /* Firefox 19+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-ms-input-placeholder": { /* IE 10+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-moz-placeholder": { /* Firefox 18- */
            color: 'rgba(57,50,50,0.3)'

        },

    },
    dataPicker: {
        "& .react-datepicker-wrapper": {
            display: 'block',
        },
        "& input": {},


    },
    textarea: {
        padding: '10px',
        resize: 'none',
        width: '100%',
        background: '#EEEEEE',
        border: '0.5px solid #9e9e9e',
        borderRadius: '5px',
        height: '120px',
        "&::-webkit-input-placeholder": {
            color: 'rgba(57,50,50,0.3)'
        },

        "&::-moz-placeholder": { /* Firefox 19+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-ms-input-placeholder": { /* IE 10+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-moz-placeholder": { /* Firefox 18- */
            color: 'rgba(57,50,50,0.3)'

        },
    },
    inputsContainer: {
        margin: '15px'
    },
    dropZone: {
        "& .MuiDropzoneArea-root": {
            background: '#EEEEEE',
            marginBottom: '30px',
            maxHeight: '343',

            border: '.5px solid #9e9e9e',

        },

    },
    inputError: {
        color: 'red',
        fontSize: '14px',
        display: 'none',
    },
});

class NewListing extends React.Component {
    state = {
        description: '',
        file: null,
        isRedirectToHomepage: false,

    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.validateForm(e);
    };
    validateForm = (e) => {

        const product = {
            description: this.state.description,
        };
        if (!this.state.description) {
            document.getElementById('descriptionError').style.display = 'block';
        } else {
            this.submitNewListingApiRequest(product);

        }

    };

    submitNewListingApiRequest = async (newLaunchDetails) => {

        const formData = new FormData();
        formData.append('description', newLaunchDetails.description);
        formData.append('file', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };
        let response = await backEndApi.post('/addevent', {newLaunchDetails} );

        console.log("The files and Image success fully uploaded" + response);
        this.setState({isRedirectToHomepage: true,})

    };


    onDescriptionChanged = (e) => {

        this.setState({description: e.target.value})
    };
    onFileChanged = (e) => {
        this.setState({file: e.target.files[0]});
    };

    render() {
        const {classes} = this.props;

        if (!this.props.getToken()) {
            return <Redirect to='/login'/>
        }
        if (this.state.isRedirectToHomepage) {
            return <Redirect to='/dashboard'/>
        }
        return (
            <div className={classes.root}>
                <div className={classes.rootm}><Typography variant='h5' style={{marginBottom: '30px', marginTop: '35px', marginLeft: '-15px'}}>Add
                    event</Typography>

                    <Grid container className={classes.firstGrid} spacing={4}>
                        <Grid item xs={12} md={6}>

                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Add Event </Typography>
                                <textarea name="shortDescription" className={classes.textarea}
                                          placeholder='Enter event...'
                                          style={{marginTop: '5px',}} onChange={this.onDescriptionChanged}
                                          value={this.state.description}
                                />
                                <Typography variant='body2' id='descriptionError' className={classes.inputError}>Leave a
                                    event please!</Typography>
                            </div>

                            <br/><br/><br/><br/>
                            <div align='right'>

                                <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                                    paddingLeft: '50px', paddingRight: '50px', background: '#005CC8',
                                    borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                                }}> Submit</Button>
                            </div>
                        </Grid>

                    </Grid></div>

            </div>
        );
    }

}

export default withStyles(useStyles)(NewListing);



