import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import ShareIcon from '@material-ui/icons/Share';
import backEndApi from "../../services/api";
import TextField from "@material-ui/core/TextField";



const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 'auto'
    },
    apply: {
        backgroundColor: '0x268e54'
    },

    contact1: {
        padding: '90px'
    }
});

class Apply1 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            title: '',
            nameOFSchool: '',
            year: 'year 3',
            level: 'Level 1',
            topicOfInterest: 'Data Science',
            knowledge: 'Intermediary',
            personalLaptop: 'Yes',
            gender: 'Male',
            reasonForParticipation: '',
            whatWillYouDo: '',
            comment: '',
            errorMessage: '',
            successMessage: '',
        }
            this.handleChange = this.handleChange.bind(this);
            this.handleChangeLevel = this.handleChangeLevel.bind(this);
            this.handleChangeYear = this.handleChangeYear.bind(this);
            this.handleChangeGender = this.handleChangeGender.bind(this);
            this.handleChangeTopicOfInterest = this.handleChangeTopicOfInterest.bind(this);
            this.handleChangePersonalLaptop = this.handleChangePersonalLaptop.bind(this);

    }

    handleOtherSubmit(e) {

        if (e.target.event.value == '') {

            this.setState({
                successMessage: 'successful information.'
            });
        } else {
            this.setState({
                errorMessage: "Please fill all the inputs correctly."
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.validateInput();
    }
    handleChangeLevel(event){
        this.setState({level:event.target.value})
    }
    handleChangeTopicOfInterest(event){
        this.setState({topicOfInterest:event.target.value})
    }
    handleChange(event) {
        this.setState({knowledge: event.target.value});
    }
    handleChangePersonalLaptop(event){
        this.setState({personalLaptop:event.target.value})
    }
    handleChangeGender(event){
        this.setState({gender:event.target.value})
    }
    handleChangeYear(event){
        this.setState({year:event.target.value})
    }

    // get the api
    applyApiRequest = async (apply) => {
        const {data} = await backEndApi.post('/hackhaton', apply);
        this.setState({
            errorMessage: '',
            successMessage: 'You have successfully  sent an apply  information. thank you '
        });
    };

    // validate correct input values

    validateInput = () => {
        const UserApply = {

            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            title: this.state.title,
            nameOFSchool: this.state.nameOFSchool,
            year: this.state.year,
            level: this.state.level,
            topicOfInterest: this.state.topicOfInterest,
            knowledge: this.state.knowledge,
            personalLaptop: this.state.personalLaptop,
            gender: this.state.gender,
            reasonForParticipation: this.state.reasonForParticipation,
            whatWillYouDo: this.state.whatWillYouDo,
            comment: this.state.comment,
        };

        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        var nameFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (this.state.name && this.state.email && this.state.phoneNumber && this.state.title && this.state.nameOFSchool) {
            if (!nameFormat.test(this.state.name)) {
                this.setState({errorMessage: "The name that you have entered is incorrect."})
            } else if (!mailformat.test(this.state.email)) {

                this.setState({errorMessage: "The email that you have provided is invalid."})

            } else if (!pattern.test(this.state.phoneNumber) && this.state.phoneNumber.length != 10) {
                this.setState({errorMessage: "You have to enter a correct phone Number"})
            } else if (!nameFormat.test(this.state.title)) {
                this.setState({errorMessage: "You have to enter a correct title name"})
            } else if (!nameFormat.test(this.state.nameOFSchool)) {

                this.setState({errorMessage: "You have to enter correct Name of The School "})
            } else {
                if (this.state.errorMessage === '') {
                    this.applyApiRequest(UserApply)
                }
            }

        } else {
            this.setState({errorMessage: "Please fill all the inputs , reasons and the comment section correctly."})
        }


    };

    // accept each input values
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onPhoneNumberChange(event) {
        this.setState({phoneNumber: event.target.value})
    }

    ontitleChange(event) {
        this.setState({title: event.target.value})
    }

    onnameOFSchoolChange(event) {
        this.setState({nameOFSchool: event.target.value})
    }

    onCommentChange(event) {
        this.setState({comment: event.target.value})
    }

    onWhatWillYouDo(event) {
        this.setState({whatWillYouDo: event.target.value})
    }

    onReasonForParticipation(event) {
        this.setState({reasonForParticipation: event.target.value})
    }


// shows error or success message
    errorcheck = () => {
        if (this.state.errorMessage) {
            return <Typography variant='h6'
                               style={{
                                   color: 'red',
                                   marginLeft: '5px',
                                   fontSize: '14px'
                               }}>{this.state.errorMessage}</Typography>
        } else {
            return <Typography variant='body2' style={{color: 'red', display: 'none'}}>''</Typography>
        }
    };
    successCheck = () => {
        if (this.state.successMessage) {
            return <Typography variant='h6'
                               style={{color: 'green', marginLeft: '5px'}}>{this.state.successMessage}</Typography>
        } else {
            return <Typography variant='body2' style={{color: 'red', display: 'none'}}>''</Typography>
        }

    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.apply}><CardContent>
                    <Typography variant="h5"> 3rd Party representative: </Typography>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <Card className={classes.contact1}><CardContent className="frmctl">
                            <FormControl>
                                <InputLabel htmlFor="my-input"> Full Name</InputLabel>
                                <Input
                                    value={this.state.name} onChange={this.onNameChange.bind(this)}
                                    id="my-input"
                                    type={"text"}
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input
                                    value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                    id="my-input"
                                    type={"email"}
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                                <Input
                                    value={this.state.phoneNumber} onChange={this.onPhoneNumberChange.bind(this)}
                                    id="my-input"
                                    type={"number"}
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">title</InputLabel>
                                <Input

                                    id="my-input"
                                    type={"text"}
                                    aria-describedby="my-helper-text"
                                    value={this.state.title} onChange={this.ontitleChange.bind(this)}/>
                            </FormControl>

                            <FormControl className={classes.nameOFSchool}>

                                <InputLabel htmlFor="my-input">Name of The School</InputLabel>
                                <Input
                                    id="my-input"
                                    type={"text"}
                                    aria-describedby="my-helper-text"
                                    value={this.state.nameOFSchool} onChange={this.onnameOFSchoolChange.bind(this)}/>
                            </FormControl>

                            <FormControl>
                                <label style={{backgroundColor:'#f5f8f8',marginTop:'1%',marginRight:'20%',marginBottom:'0%'}}>
                                    Choose your class of year:
                                </label>
                                <select value={this.state.value} onChange={this.handleChangeYear} style={{minHeight:'50px'}}>
                                    <option value="year 1">year 1</option>
                                    <option value="year 2">year 2</option>
                                    <option value="year 3">year 3</option>
                                    <option value="year 4">year 4</option>
                                    <option value="year 5">year 5</option>
                                    <option value="year 6">year 6</option>
                                    <option value="year 7">year 7</option>
                                </select>
                            </FormControl>



                            <FormControl>
                                <label style={{backgroundColor:'#f5f8f8',marginTop:'1%',marginRight:'20%',marginBottom:'0%'}}>
                                    Choose your Level:
                                </label>
                                <select value={this.state.value} onChange={this.handleChangeLevel} style={{minHeight:'50px'}}>
                                    <option value="Level 1">Level 1</option>
                                    <option value="Level 2">Level 2</option>
                                    <option value="Level 3">Level 3</option>
                                    <option value="Level 4">Level 4</option>
                                    <option value="Level 5">Level 5</option>
                                    <option value="Level 6">Level 6</option>
                                    <option value="Level 7">Level 7</option>
                                </select>
                            </FormControl>
                            <FormControl>
                                <label style={{backgroundColor:'#f5f8f8',marginTop:'1%',marginRight:'20%',marginBottom:'0%'}}>
                                    Choose your topic of interest only one:
                                </label>
                                <select value={this.state.value} onChange={this.handleChangeTopicOfInterest} style={{minHeight:'50px'}}>
                                    <option value="Application Development">Application Development</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Java Applications">Java Applications</option>
                                </select>
                            </FormControl>
                            <FormControl>
                                <label style={{backgroundColor:'#f5f8f8',marginTop:'1%',marginRight:'20%',marginBottom:'0%'}}>
                                    Prior knowledge in chosen topic:
                                </label>
                                    <select value={this.state.value} onChange={this.handleChange} style={{minHeight:'50px'}}>
                                        <option value="Beginners">Beginners</option>
                                        <option value="Intermediary">Intermediary</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                            </FormControl>
                            <FormControl>
                                <label style={{backgroundColor:'#f5f8f8',marginTop:'1%',marginRight:'20%',marginBottom:'0%'}}>
                                    Do you have a personal laptop? Caveat: Personal laptop recommended.:
                                </label>
                                <select value={this.state.value} onChange={this.handleChangePersonalLaptop} style={{minHeight:'50px'}}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </FormControl>
                            <FormControl>
                                <label style={{backgroundColor:'#f5f8f8',marginTop:'1%',marginRight:'20%',marginBottom:'0%'}}>
                                    Select Your Gender:
                                </label>
                                <select value={this.state.value} onChange={this.handleChangeGender} style={{minHeight:'50px'}}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </FormControl>


                            <FormControl>
                                <TextField
                                    style={{marginTop: '20px'}}
                                    className={classes.place}
                                    id="filled-multiline-flexible"
                                    label="why do you want to participate?"
                                    multiline
                                    maxRows={10}
                                    value={this.state.reasonForParticipation}
                                    onChange={this.onReasonForParticipation.bind(this)}
                                    variant="filled"
                                />
                            </FormControl>

                            <FormControl>
                                <TextField
                                    style={{marginTop: '20px', marginBottom: '20px'}}
                                    className={classes.place}
                                    id="filled-multiline-flexible"
                                    label="What will you do with the knowledge acquired?"
                                    multiline
                                    value={this.state.whatWillYouDo} onChange={this.onWhatWillYouDo.bind(this)}
                                    maxRows={10}
                                    variant="filled"
                                />
                            </FormControl>

                            <FormControl>
                                <TextField
                                    style={{width: '100%',}}
                                    id="filled-multiline-flexible"
                                    label="Fill Free to Give A comment "
                                    multiline
                                    minRows={10}
                                    value={this.state.comment} onChange={this.onCommentChange.bind(this)}
                                    variant="filled"
                                />
                            </FormControl>

                            <div>
                                <Typography>Please share the message to friends.</Typography>
                                <ShareIcon></ShareIcon>
                            </div>

                            <Typography>Melkam Edele/GOOD LUCK!</Typography>

                        </CardContent>

                            {this.state.errorMessage ? this.errorcheck() : this.successCheck()}
                            <Button variant="contained" color="primary" type="submit"
                                    className="btn">Subimit</Button>

                        </Card>

                    </form>
                </CardContent></div>

            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Apply1);

