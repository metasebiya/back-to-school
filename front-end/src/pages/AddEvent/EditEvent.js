import React, {useEffect, useRef, useState} from 'react';
import {Button, Grid, Typography, withStyles} from '@material-ui/core';
import {Redirect} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import backEndApi from '../../services/api';

const useStyles = theme => ({
    root: {
        margin: '20px 100px',
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
let otherArray = [];


function EditEvent(props) {

    const {classes} = props;
    const [theDocs, setTheDocs] = useState('');

    const [description, setDescription] = useState('');
    const [cId, setCId] = useState('');
    const [file, setFile] = useState([]);
    const [isRedirectToHomepage, setIsRedirectToHomepage] = useState('');

    useEffect(() => {


        const loadData = async () => {

            const {data} = await backEndApi.get('./editevent', {params: {id: props.match.params.id}});
            console.log(data);
            setTheDocs(data);

            setDescription(data.docs.description);
            setCId(data.docs._id);


        };
        loadData();

    }, [setTheDocs]);


    const onFormSubmit = (e) => {
        e.preventDefault();

        validateForm(e);
    };
    const validateForm = (e) => {

        const product = {
            id: cId,
            description: description,
        };
        if (!description) {
            document.getElementById('descriptionError').style.display = 'block';
        } else {
            submitEditeventApiRequest(product);

        }

    };

    const submitEditeventApiRequest = async (newLaunchDetails) => {
        /*let user = props.getToken();*/

        /*const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };*/

        let response = await backEndApi.post('/updateevent', {params: newLaunchDetails});
        /*let resImage = await backEndApi.post('/uploadProductImage', formData, config);*/


        console.log("The files and Image success fully uploaded" + response);
        setIsRedirectToHomepage(true)

    };


    const onDescriptionChanged = (e) => {
        setDescription(e.target.value)
    };


    if (!props.getToken()) {
        return <Redirect to='/login'/>
    }
    if (isRedirectToHomepage) {
        return <Redirect to='/dashboard'/>
    }
    return (
        <div className={classes.root}>
            <Typography variant='h5' style={{marginBottom: '30px', marginTop: '35px', marginLeft: '-15px'}}>Edit
                House</Typography>

            <Grid container className={classes.firstGrid} spacing={4}>
                <Grid item xs={12} md={6}>

                    <div className={classes.inputsContainer}>
                        <Typography variant='body2'>Leave a event</Typography>
                        <textarea name="shortDescription" className={classes.textarea}
                                  placeholder='Enter event...'
                                  style={{marginTop: '5px',}} onChange={onDescriptionChanged}
                                  value={description}
                        />
                        <Typography variant='body2' id='descriptionError' className={classes.inputError}>Leave a
                            event please!</Typography>

                    </div>
                    <div className={classes.inputsContainer}>
                        <Typography variant='body2'>File Upload <span
                            style={{opacity: '0.5'}}>(optional)</span></Typography>
                        <input name="payment" type="file" min='0' placeholder='eg, 5000'
                               className={[classes.input]}
                            /*onChange={onFileChanged}*/
                            /*value={monthlyPayment}*/
                        />

                    </div>

                    <br/><br/><br/><br/>
                    <div align='right'>

                        <Button onClick={onFormSubmit} value='Pending' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#005CC8',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Submit</Button>
                    </div>
                </Grid>

            </Grid>
        </div>

    )

}

export default withStyles(useStyles)(EditEvent);



