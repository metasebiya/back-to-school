import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Container, withStyles} from "@material-ui/core";
import NavTabs from './components/NavTabs'
import LoginRegister from './pages/Authentication/Login'
import Footer from './components/Footer'
import Signup from "./pages/Authentication/Signup";
import AdminDetail from './pages/Dashboard/Admin-dashboard/AdminDetail'
import UpperFooter from "./components/UpperFooter";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ResetPassword from "./pages/Authentication/ForgotPassword/ResetPassword";
import About from "./pages/AboutUs/About";
import Hackhaton from "./pages/Hackhaton/Hackhaton";
import Exhibitor from "./pages/Exhibitors/Exhibitor";
import HomePage from "./pages/Home/home/homePage";
import "./pages/Home/assets/css/gallery.css";
import "./pages/Home/assets/css/section.css";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/ContactUs/Contact";
import AddEvent from './pages/AddEvent/New'
import EditEvent from './pages/AddEvent/EditEvent'
import SideEvent from './pages/SideEvents/SideEvent'

const useStyles = ((theme) => ({
    root: {},
    mainParts: {
        maxWidth: '100%',
        overflowX: 'hidden',
        marginTop: '4%'
    },
}));

class App extends React.Component {
    state = {token: '', searchKeyword: ''};
    setToken = (token) => {
        localStorage.setItem('token', JSON.stringify(token));

        this.setState({token: token})
    };


    getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);

        if (userToken) {
            return userToken.token
        } else {
            return ''
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <NavTabs getToken={this.getToken}/>

                    <Container className={classes.mainParts} maxWidth={'xl'}>
                        <Route path="/" exact component={HomePage}/>
                        <Route path='/adminDetail/:id'
                               component={(props) => <AdminDetail {...props} getToken={this.getToken}/>}/>
                        <Route path='/login' exact> <LoginRegister setToken={this.setToken}
                                                                   getToken={this.getToken}/></Route>
                        <Route path='/signup' exact> <Signup setToken={this.setToken} getToken={this.getToken}/></Route>
                        <Route path='/dashboard' exact> <Dashboard getToken={this.getToken}/></Route>
                        <Route path='/register' component={Signup}/>
                        <Route path="/hackhaton" component={Hackhaton}/>
                        <Route path="/exhibitor" component={Exhibitor}/>
                        <Route path="/sideEvent" component={SideEvent}/>
                        <Route path="/Contact" component={Contact}/>
                        <Route path='/addEvent'> <AddEvent getToken={this.getToken}/></Route>
                        <Route path='/resetPassword' exact> <ForgotPassword getToken={this.getToken}/></Route>
                        <Route path='/editEvent/:id' exact
                               component={(props) => <EditEvent {...props} getToken={this.getToken}/>}/>
                        <Route path='/resetPassword/:id' exact
                               component={(props) => <ResetPassword {...props} setToken={this.setToken}/>}/>
                        <Route path='/about' component={About}/>
                    </Container>
                </BrowserRouter>
                <UpperFooter></UpperFooter>
                <Footer/>

            </div>
        );
    }


}

export default withStyles(useStyles)(App);

