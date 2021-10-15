import React from "react";
import {FormControl} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "./Contact.css";
import {withStyles} from "@material-ui/core/styles";
import ContactCard from "./ContactCard";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LottieAnimation from "./lotiContact";
import lotiContact from "./contactus2.json";
import TelegramIcon from "@material-ui/icons/Telegram";
import backEndApi from '../../services/api'

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        flexFlow: "column wrap",
    },
    contact: {
        marginBottom: "130px",
        marginTop: "138px",
    },

    contact1: {
        padding: "30px",
    },
    root1: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        flexFlow: "column wrap",
    },

    main: {
        margin: "-12px",
    },
    country: {
        marginTop: "15px",
    },
    btn: {
        margin: "5px",
        height: '20px',
    },

    contactInfo: {
        marginTop: '15px',
        marginBottom: '25px'
    }
});

class Contact extends React.Component {


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
            phoneNumber: this.state.phoneNumber,
            company: this.state.company,
            country: this.state.country,
        };

        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        var nameFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (this.state.name && this.state.email && this.state.phoneNumber && this.state.company && this.state.country) {
            if (!nameFormat.test(this.state.name)) {
                this.setState({errorMessage: "The name that you have entered is incorrect."})
            } else if (!mailformat.test(this.state.email)) {

                this.setState({errorMessage: "The email that you have provided is invalid."})

            } else if (!pattern.test(this.state.phoneNumber)) {
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
                <div className="papa">
                    <LottieAnimation lotti={lotiContact} height={300} width={400}/>
                </div>
                <div className={classes.root}>
                    <div className={classes.main}>
                        <Typography style={{color: "green", display: 'flex', justifyContent: 'center', margin: '10px'}}>
                            We are searching for you! Let’s get in touch!
                        </Typography>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Card className={classes.contact1}>
                                <CardContent className="frmctl">
                                    <FormControl>
                                        <InputLabel htmlFor="my-input"> Name</InputLabel>
                                        <Input
                                            value={this.state.name} onChange={this.onNameChange.bind(this)}
                                            id="name"
                                            type={"text"}
                                            aria-describedby="my-helper-text"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                                        <Input
                                            value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                            id="email"
                                            type={"email"}
                                            aria-describedby="my-helper-text"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                                        <Input
                                            value={this.state.phoneNumber}
                                            onChange={this.onPhoneNumberChange.bind(this)}
                                            id="phone"
                                            type={"number"}
                                            aria-describedby="my-helper-text"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Company</InputLabel>
                                        <Input

                                            id="company"
                                            type={"text"}
                                            aria-describedby="my-helper-text"
                                            value={this.state.company} onChange={this.onCompanyChange.bind(this)}/>
                                    </FormControl>

                                    <FormControl className={classes.country}>

                                        <InputLabel htmlFor="my-input">Country</InputLabel>
                                        <Input
                                            id="country"
                                            type={"text"}
                                            aria-describedby="my-helper-text"
                                            value={this.state.country} onChange={this.onCountryChange.bind(this)}/>
                                    </FormControl>

                                    {this.state.errorMessage ? this.errorcheck() : this.successCheck()}

                                </CardContent>
                              <div style={{display:'flex',justifyContent:'end',marginRight:'5%'}}>
                                <Button
                                    style={{width: '200px',display:'flex',justifyContent:'center'}}
                                    id="submit"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="btn"
                                >
                                  Subimit
                                </Button>
                              </div>
                            </Card>
                        </form>
                        <div className={classes.root1}>
                            <div>
                                <ContactCard></ContactCard>
                            </div>
                            <div className={classes.contactInfo}>
                                <Card>
                                    <CardContent>
                                        Contact Information
                                        <Card>
                                            <CardContent>
                                                Company: Noosphere Affairs Trading P.L;C Address: Firdu
                                                Commercial Building, 3rd Floor Office no 308. P.O.box:
                                                54178 Tel: 1 +251-974 082036 Tel: 2 +251-974 082037
                                            </CardContent>
                                        </Card>
                                        <Card className={classes.contact}>
                                            <CardContent>
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
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardContent>
                                                <Typography>Follow us on: </Typography>

                                                <FacebookIcon color="primary"></FacebookIcon>

                                                <TelegramIcon color="primary"></TelegramIcon>


                                                <LinkedInIcon color="primary"></LinkedInIcon>

                                                <TwitterIcon color="primary"></TwitterIcon>


                                                <InstagramIcon color="primary"></InstagramIcon>

                                            </CardContent>
                                        </Card>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }

}

export default withStyles(styles, {withTheme: true})(Contact);

