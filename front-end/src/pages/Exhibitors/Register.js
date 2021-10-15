import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {FormControl, withStyles} from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import Offer from "./Offer";
import backEndApi from "../../services/api";


const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: 'row',
        marginLeft: '-30px',
    },
    register: {
        minHeight: '460px',
        width: '57%',
        marginTop:'20px'
    },
    register1: {
        padding: '20px',
        minHeight: '480px',
    },


    map: {
        marginRight: '-400px',
        padding: '25px'
    },
    today: {
        backgroundColor: '#f5f8f5',
        padding: '30px',
        borderRadius: '22px',
        color: '#3C10C2',
        fontSize: '26px'
    },
    total: {
        backgroundColor: 'rgba(249,245,245,0.8)',
        borderRadius: '22px',

    },
    contact: {
        margin: '60px'
    },
    contact1: {
        marginBottom: '10px'
    },
});


class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            company: '',
            country: '',
            errorMessage: '',
            successMessage: '',
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        this.validateInput();
    }

    // get the api
    contactApiRequest = async (contact) => {
        const {data} = await backEndApi.post('/contact', contact);
        this.setState({

            errorMessage: '',

            successMessage: 'You have successfully  sent a contact information.'
        });
    };


    // validate correct input values

    validateInput = () => {
        const UserContact = {
            name: this.state.name,
            email: this.state.email,
            payerPhone: this.state.phoneNumber,
            company: this.company,
            country: this.country,
        };

        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        var nameFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (this.state.name && this.state.email && this.state.phoneNumber && this.state.company && this.state.country) {
            if (!nameFormat.test(this.state.name)) {
                this.setState({errorMessage: "The name that you have entered is incorrect."})
            } else if (!mailformat.test(this.state.email)) {

                this.setState({errorMessage: "The email that you have provided is invalid."})
            } else if (!pattern.test(this.state.phoneNumber) && this.state.phoneNumber.length != 10) {
                this.setState({errorMessage: "You have to enter a correct phone Number"})
            } else if (!nameFormat.test(this.state.company)) {
                this.setState({errorMessage: "You have to enter a correct company name"})
            } else if (!nameFormat.test(this.state.country)) {

                this.setState({errorMessage: "You have to select a correct country name"})
            } else {
                if (this.state.errorMessage === '') {
                    this.contactApiRequest(UserContact)
                }
            }

        } else {
            this.setState({errorMessage: "Please fill all the inputs correctly."})
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

    onCountryChange(event) {
        this.setState({country: event.target.value})
    }

    onCompanyChange(event) {
        this.setState({company: event.target.value})
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
            <div>
                <Card className={classes.total}><CardContent>

                    <Typography style={{display:'flex',justifyContent:'center'}}>NOW IT’S IS YOUR TURN TO MEET YOUR RIGHT STUDENTS!</Typography>
                    <Typography variant="h5" style={{display:'flex',justifyContent:'center',margin:'3%',backgroundColor:'#ee662d',width:'450px',fontSize:'25px',marginLeft:'35%'}}>BECOME A SPONSOR! </Typography>
                    <Typography style={{display:'flex',justifyContent:'center'}}>
                        Join our international education platform and we make sure
                        targeted audience of educationalists &
                    </Typography>
                    <Typography style={{display:'flex',justifyContent:'center'}}>
                        international partners that can extend your business globally should witness your presence.
                    </Typography>

                    <Card className={classes.today} style={{display:'flex',justifyContent:'center'}}><CardContent><Typography variant="h5">
                        Do this easy thing!
                    </Typography></CardContent>
                    <CardContent style={{marginTop:'2%',marginLeft:'-16%'}}>
                        <span >Register Today.</span>
                    </CardContent>
                    </Card>


                </CardContent></Card>
                <div className={classes.root}>
                    <div className={classes.register}>
                        <Card><CardContent>
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <div className={classes.register1}><div className="frmctl">
                                    <FormControl>
                                        <InputLabel htmlFor="my-input"> Name</InputLabel>
                                        <Input
                                            id="my-input"
                                            type={"text"}
                                            aria-describedby="my-helper-text"
                                            value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                                        <Input
                                            id="my-input"
                                            type={"email"}
                                            aria-describedby="my-helper-text"
                                            value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                                        <Input
                                            id="my-input"
                                            type={"number"}
                                            aria-describedby="my-helper-text"
                                            value={this.state.phoneNumber}
                                            onChange={this.onPhoneNumberChange.bind(this)}/>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Company</InputLabel>
                                        <Input
                                            id="my-input"
                                            type={"text"}
                                            aria-describedby="my-helper-text"
                                            value={this.state.company} onChange={this.onCompanyChange.bind(this)}/>
                                    </FormControl>
                                    <FormControl className={classes.country}>

                                        <InputLabel htmlFor="my-input">Country</InputLabel>
                                        <Input
                                            id="my-input"
                                            type={"text"}
                                            aria-describedby="my-helper-text"
                                            value={this.state.country} onChange={this.onCountryChange.bind(this)}/>
                                    </FormControl>

                                    <FormControl>
                                        {this.state.errorMessage ? this.errorcheck() : this.successCheck()}
                                    </FormControl>

                                </div>

                                    <Button type="submit" variant="contained" color="primary" style={{margin:'20px',width:'200px'}}
                                            className="btn">Subimit</Button>
                                </div>
                            </form>
                        </CardContent></Card>
                    </div>
                    <div className={classes.map}>

                        <iframe
                            title="map"
                            className="mb-4 mb-lg-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3512717568565!2d38.755158364835765!3d9.031685441433574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f13face90f%3A0x5cf68b9e8b6cf775!2sFirdu%20Commercial%20Center!5e0!3m2!1sen!2set!4v1630355584920!5m2!1sen!2set"
                            frameBorder="0"
                            style={{border: "0", width: "620px", height: "500px"}}
                            allowFullScreen
                        ></iframe>

                    </div>
                </div>

                <div>
                    <Offer></Offer>
                </div>
                <div className={classes.contact1}>
                    <div><div>


                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                           <h4 style={{}}>
                         Contact Information
                           </h4>

                            <div>
                                Company: Noosphere Affairs
                                Trading P.L;C
                                Address: Firdu Commercial
                                Building, 3rd Floor
                                Office no 308.

                                P.O.box: 54178
                                Tel: 1 +251-974 082036
                                Tel: 2 +251-974 082037
                            </div>

                       </div>
                        <Card className={classes.contact}><CardContent>
                            Email:
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                digital@backtoschoolethiopia.org
                            </Link>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                back2schooleth@gmail.com
                            </Link>
                            <Typography>What’s up No: +251 974082037</Typography>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                www.backtoschoolethiopia.org
                            </Link>
                        </CardContent></Card>

                        <div style={{display:'flex',justifyContent:'flex-end'}}>

                            <Typography>Follow us on: </Typography>
                            <FacebookIcon color="primary"></FacebookIcon>
                            <TelegramIcon color="primary"></TelegramIcon>

                            <LinkedInIcon color="primary"></LinkedInIcon>

                            <TwitterIcon color="primary"></TwitterIcon>

                            <InstagramIcon color="primary"></InstagramIcon>


                        </div>

                    </div></div>
                </div>

            </div>

        );
    }
}

export default withStyles(styles, {withTheme: true})(Register);
