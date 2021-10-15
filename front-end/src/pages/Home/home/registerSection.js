import React from "react";
import backEndApi from "../../../services/api";
import Typography from "@material-ui/core/Typography";

class RegisterSection extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber:'',
            company: '',
            country:'',
            message:'',
            errorMessage: '',
            successMessage: '',
        }

    }

    handleSubmit(e){
        e.preventDefault();
        this.validateInput();
    }

    // get the api
    homeApiRequest = async (home) => {
        const {data} = await backEndApi.post('/register', home);
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
            phoneNumber:this.state.phoneNumber,
            company:this.state.company,
            country:this.state.country,
            message:this.state.message,
        };

        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        var nameFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (this.state.name && this.state.email && this.state.phoneNumber && this.state.company && this.state.country && this.state.message) {
            if (!nameFormat.test(this.state.name)) {
                this.setState({errorMessage: "The name that you have entered is incorrect."})
            }

            else if (!mailformat.test(this.state.email)) {

                this.setState({errorMessage: "The email that you have provided is invalid."})

            }

            else if (!pattern.test(this.state.phoneNumber)) {
                this.setState({errorMessage: "You have to enter a correct phone Number"})
            }

            else if (!nameFormat.test(this.state.company)) {
                this.setState({errorMessage: "You have to enter a correct company name"})
            }

            else if (!nameFormat.test(this.state.message)) {
                this.setState({errorMessage: "You have to enter a correct message"})
            }

            else if (!nameFormat.test(this.state.country))  {

                this.setState({errorMessage: "You have to select a correct country name"})
            }
            else {
                if (this.state.errorMessage === '') {
                    this.homeApiRequest(UserContact)
                }
            }

        }

        else {
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

    onMessageChange(event) {
        this.setState({message: event.target.value})
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
        return (
            <section id="register" className="register">
                <div>
                    <div>
                        <h3>
                            <span>Register Now</span>
                        </h3>
                    </div>

                    <div style={{display: 'flex',flexDirection: 'row',width:'100%'}}>
                        <div style={{width:'50%'}}>
                            <form  id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                                <div className=" form-group">
                                    <input
                                        value={this.state.name} onChange={this.onNameChange.bind(this)}
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"

                                    />
                                </div>
                                <div className=" form-group">
                                    <input
                                        value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"

                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.phoneNumber} onChange={this.onPhoneNumberChange.bind(this)}
                                        type="text"
                                        className="form-control"
                                        name="phonenumber"
                                        id="phonenumber"
                                        placeholder="Phone Number"

                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.company} onChange={this.onCompanyChange.bind(this)}
                                        type="text"
                                        className="form-control"
                                        name="company"
                                        id="company"
                                        placeholder="Company"

                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.country} onChange={this.onCountryChange.bind(this)}
                                        type="text"
                                        className="form-control"
                                        name="Country"
                                        id="Country"
                                        placeholder="Country"

                                    />
                                </div>
                                <div className="form-group">
                <textarea
                    value={this.state.message} onChange={this.onMessageChange.bind(this)}
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"

                ></textarea>
                                </div>

                                <div> {this.state.errorMessage ? this.errorcheck() : this.successCheck()} </div>
                                <div className="text-center">
                                    <button type="submit" style={{width:'200px',backgroundColor:'#4BCCF7'}}>Send </button>
                                </div>
                            </form>
                        </div>

                            <div className="col-lg-6 " style={{width:'50%'}}>
                                <iframe
                                    title="map"
                                    className="mb-4 mb-lg-0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3512717568565!2d38.755158364835765!3d9.031685441433574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f13face90f%3A0x5cf68b9e8b6cf775!2sFirdu%20Commercial%20Center!5e0!3m2!1sen!2set!4v1630355584920!5m2!1sen!2set"
                                    frameborder="0"
                                    style={{border: "0", width: "100%", height: "400px"}}
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
              </div>

            </section>
    );
    }
    }

    export default RegisterSection;
