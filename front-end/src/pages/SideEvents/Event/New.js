import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {DropzoneArea} from 'material-ui-dropzone';
import {Redirect} from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import backEndApi from '../../../services/api'
import moment from "moment";
import {withStyles} from "@material-ui/styles";

const useStyles = theme => ({
    root: {
        marginTop: '20px',
        marginLeft: '16px',
        "& input[type=number]": {
            "&::-webkit-inner-spin-button": {
                '-webkit-appearance': 'none',
            },
            "&::-webkit-outer-spin-button": {
                '-webkit-appearance': 'none',
            },
            '-moz-appearance': 'textField'
        },
        "& .MuiTypography-body2": {
            fontWeight: 800
        },
    },
    firstGrid: {
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
        location: '',
        floor: '',
        phoneNumber: '',
        description: '',
        file: null,
        errorMessage: '',
        isRedirectToHomepage: false,

    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.validateForm(e);
    };
    validateForm = (e) => {

        const event = {
            location: this.state.location,
            floor: parseInt(this.state.floor),
            phoneNumber: parseInt(this.state.phoneNumber),
            description: this.state.description,
        };

        if (!this.state.location) {
            document.getElementById('locationError').style.display = 'block';
        }
        if (!this.state.floor) {
            document.getElementById('floorError').style.display = 'block';

        }

        if (!this.state.phoneNumber) {
            document.getElementById('availabilityError').style.display = 'block';

        }

        if (!this.state.file) {
            document.getElementById('dropZoneImage').style.display = 'block';
        }

        if (this.state.location && this.state.description &&
            this.state.floor && this.state.phoneNumber) {

            this.submitNewListingApiRequest(event);

        } else {
            //for not yet validated

        }


    };
    submitNewListingApiRequest = async (newLaunchDetails) => {
        const formData = new FormData();
        this.state.file.forEach(fil => formData.append('files[]', fil));
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log(formData);
        let response = await backEndApi.post('/addevent', {params: newLaunchDetails});
        let resImage = await backEndApi.post('/uploadeventImage', formData, config);
        console.log("The files and Image success fully uploaded" + resImage + response);
    };
    onLocationChanged = (e) => {
        if (e.target.value.length === 0) {
            document.getElementById('locationError').style.display = 'block';
        } else {
            document.getElementById('locationError').style.display = 'none';

        }
        this.setState({location: e.target.value});
        if (e.target.value !== 1) {
            this.setState({location: e.target.value})
        }
    };
    onDescriptionChanged = (e) => {

        this.setState({description: e.target.value})
    };
    onFloorchanged = (e) => {
        if (e.target.value === 'Select Floor') {
            document.getElementById('floorError').style.display = 'block';

        } else {
            document.getElementById('floorError').style.display = 'none';
        }
        this.setState({floor: e.target.value})
    };


    onPhoneNumberChanged = (e) => {

        if (e.target.value.length === 0) {
            document.getElementById('phoneNumberError').style.display = 'block';

        } else {
            document.getElementById('phoneNumberError').style.display = 'none';

        }


        this.setState({phoneNumber: e.target.value})


    };
    onAvailabilityChanged = (date) => {

        if (date === null) {
            document.getElementById('availabilityError').style.display = 'block';

        } else {
            document.getElementById('availabilityError').style.display = 'none';

        }

        this.setState({availabilityDate: date})
    };

    onDropZoneChange = (e) => {
        if (e[0]) {
            document.getElementById('dropZoneImage').style.display = 'none';

        }

        this.setState({file: e});

    };


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography variant='h5' style={{marginBottom: '30px', marginTop: '35px', marginLeft: '-15px'}}>New Event</Typography>

                <Grid container className={classes.firstGrid} spacing={4}>
                    <Grid item xs={12} md={6}>
                        <form>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Location of the Event</Typography>
                                <input type="text" list='location' id="location" name='Myname' placeholder='Location'
                                       className={classes.input}
                                       onChange={this.onLocationChanged}
                                       value={this.state.location}
                                />
                                <datalist id="Location" >
                                    <option value="4 kilo "/>
                                    <option value="5 kilo"/>
                                    <option value="6 kilo"/>
                                    <option value="Megenagna"/>
                                    <option value="Piassa"/>
                                    <option value="Bole"/>
                                    <option value="Gotera"/>
                                    <option value="Mexico"/>
                                    <option value="Shiro Meda"/>
                                </datalist>

                                <Typography variant='body2' id='locationError' className={classes.inputError}>You have
                                    to entered Location of your Event .</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Floor</Typography>

                                <select name="selectNumberOfFloor" className={classes.input} onChange={this.onFloorchanged}>
                                    <option value="Select Floor" disabled selected>Select Floor
                                    </option>
                                    <option value='0'>ground</option>
                                    <option value='1'>+1</option>
                                    <option value="2">+2</option>
                                    <option value="3">+3</option>
                                    <option value="4">+4</option>
                                    <option value="5">+5</option>
                                    <option value="6">+6</option>

                                </select>
                                <Typography variant='body2' id='floorError' className={classes.inputError}>you have
                                    to select floor.</Typography>
                            </div>

                            <div className={[classes.inputsContainer]}>
                                <Typography variant='body2'>Available</Typography>
                                <div className={classes.dataPicker} id="date">
                                    <DatePicker
                                        dateFormat="dd-MM-yyyy"
                                        selected={this.state.eventLaunchDate}
                                        className={[classes.input]}
                                        onChange={this.onAvailabilityChanged}
                                        value={moment(this.state.availabilityDate).format("DD-MM-YYYY")}
                                    />
                                </div>
                                <Typography variant='body2' id='availabilityError' className={classes.inputError}>You have
                                    to Set  Data.</Typography>
                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>phone number</Typography>
                                <div style={{position:'relative'}}><input type="number" placeholder='eg, 925762589' name="phone" className={classes.input}
                                                                          onChange={this.onPhoneNumberChanged}
                                                                          value={this.state.phoneNumber}
                                                                          style={{paddingLeft: '50px'}}
                                />
                                    <span style={{position: 'absolute', left: 7, top: "35%", opacity: '0.5'}}>+251</span></div>

                                <Typography variant='body2' id='phoneNumberError' className={classes.inputError}>You
                                    have to enter your phone number.</Typography>
                            </div>

                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Short description <span style={{opacity:'0.5'}}>(optional)</span></Typography>
                                <textarea name="shortDescription" className={classes.textarea} placeholder='Enter short description...'
                                          style={{marginTop: '5px',}} onChange={this.onDescriptionChanged}
                                          value={this.state.description}
                                />

                            </div>

                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <div className={classes.inputsContainer}>
                            <Typography variant='body2'>Upload event image</Typography>

                            <Grid style={{marginTop: '5px'}}>
                                <Grid itme xs={12} md={8} className={classes.dropZone} id="upload"  data-cy="content">

                                    {/*Icon ={}*/}
                                    <DropzoneArea
                                        acceptedFiles={['image/*']}
                                        maxFileSize={6000000}
                                        filesLimit={'6'}
                                        dropzoneText={"Drag and drop an image here or click"}
                                        onChange={this.onDropZoneChange}
                                    />
                                    {/*<DropzoneArea getPreviewIcon={this.handlePreviewIcon}
                                                  dropzoneText="Drag and drop a jpg, png or webp Icon, Or click to add"/>*/}
                                </Grid>
                                <Typography variant='body2' id='dropZoneImage' className={classes.inputError}>You have
                                    to
                                    upload an image.</Typography>
                            </Grid>
                        </div>


                        <br/><br/><br/><br/>
                        <div align='right'>
                            <Button onClick={this.onFormSubmit} value='NA' variant='contained' style={{
                                paddingLeft: '50px', paddingRight: '50px', background: '#fffcf5',
                                borderRadius: '5px', marginRight: '15px', color: 'black', textTransform: 'none'
                            }}>send</Button>
                        </div>
                    </Grid>

                </Grid>

            </div>
        );
    }

}

export default withStyles(useStyles)(NewListing);



