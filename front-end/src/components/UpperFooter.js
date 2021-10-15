import React from "react";
import HomeIcon from '@material-ui/icons/Home'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';

const UpperFooter = () => {
    return (
        <Box>

            <h1 style={{ color: "#443f3f",
                textAlign: "center",
                marginTop: "-50px",marginBottom:'2%' }}>
                <span style={{color: '#ee662d'}}>Back </span>to School Ethiopia Expo
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="/About">Aim</FooterLink>
                        <FooterLink href="/About">Vision</FooterLink>
                        <FooterLink href="/About">BackGround</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Event Management</FooterLink>
                        <FooterLink href="#">Recruitment & Training </FooterLink>
                        <FooterLink href="#">Noosphere Academy</FooterLink>
                        <FooterLink href="#">Noosphere Digital Journal</FooterLink>
                        <FooterLink href="#">Noosphere Podcast</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="back2schooleth@gmail.com"> back2schooleth@gmail.com</FooterLink>
                        <FooterLink href="digital@backtoschoolethiopia.org">digital@backtoschoolethiopia.org</FooterLink>
                        <FooterLink href="#">+251974082036</FooterLink>
                        <FooterLink href="#">+251974082037</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://www.facebook.com/B2SXET">
                            <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>

                              <FacebookIcon color="primary"></FacebookIcon>

                            </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/robel-bekele-kebede-0198a4143/">
                            <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>


                            <LinkedInIcon color="primary"></LinkedInIcon>

                            </span>
                            </i>
                        </FooterLink>


                        <FooterLink href="https://twitter.com/NoosphereAffair">
                            <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>


                            <TwitterIcon color="primary"></TwitterIcon>

                            </span>
                            </i>
                        </FooterLink>

                        <FooterLink href="https://www.youtube.com/channel/UCtMJNlZtDqH57ICrdRI_lvw">
                            <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>
                              <YouTubeIcon color="primary" ></YouTubeIcon>

                            </span>
                            </i>
                        </FooterLink>

                        <FooterLink href="https://www.instagram.com/16_b2sxet/">
                            <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>

                            <InstagramIcon color="primary"></InstagramIcon>

                            </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>

                                <TelegramIcon color="primary"></TelegramIcon>
                            </span>
                            </i>
                        </FooterLink>

                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default UpperFooter;
