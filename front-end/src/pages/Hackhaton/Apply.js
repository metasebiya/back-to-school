import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import {scroller} from "react-scroll";

const useStyles = makeStyles((theme) => ({

  root: {
    width: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  titile: {
    color: "red",
    display:'flex',
    justifyContent:'center',
    textAlign:'center'
  },
  btn: {
    marginTop: "60px",
    display:'flex',
    justifyContent:'end',
    textAlign:'center'
  },
}));


export default function Apply() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <CardHeader
        className={classes.titile}
        title="1.2.	Apply "
        subheader="Back to School Ethiopia - HACKHTON!                                                             "
      />
      <CardContent>
        <Typography paragraph>
          Registration: The applicants must submit their applications via the
          following link, to be updated when the site is complete.
          <Button variant="contained" color="primary" className={classes.btn}>Click to Apply
          </Button>
        </Typography>

        <Typography paragraph>
          Registration Deadline Date: January 16/2022. Place of the HACKATHON:
          Abrehot Library Date of the HACKATHON: Thursday, February 24/2022,
          9am- 5pm Friday, February 25/2022, 9am – 5pm Participants: Applicant’s
          for the Hackathon Competition shall be undergraduates. Group Size:
          Max: 7 Applicants/group. Restrictions: Applicants shall be between the
          ages of 18 – 25. Special Opportunity: Women’s are highly encouraged to
          participate Available Services for applicants: Mentorship Resources
          Curriculum Internet Connection
        </Typography>
        <Typography component="p">
          Mentorship Dates for applicants: Session 1: February 17 - 18/2022, for
          students based in Addis Ababa Session 2: February 21 - 22/2022. For
          students based in other parts of Ethiopia& abroad.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <Typography variant="h6">Rewards:</Typography>
            In cash & in kind, optional Laptop, optional Personal Mentor
            Delegation Internships Opportunities Incubation Opportunities
            Scholarship Opportunities
          </Typography>
          <Typography paragraph>
            Competition finalist to be officially announced on the closing date
            of the event, January 18, 2022.{" "}
          </Typography>
          <Typography variant="h6">REGISTER NOW!</Typography>
          <Typography>
            Registration Form Information’s
            <ul>
              <li>First Name</li>
              <li>Last Name</li>
              <li>Tel/Mob</li>
              <li>Email</li>
              <li>
                Gender
                <ul>
                  <li>Female</li>
                  <li>Male</li>
                </ul>
              </li>
            </ul>
            <FacebookIcon color="primary"></FacebookIcon>

            <TelegramIcon color="primary"></TelegramIcon>

            <LinkedInIcon color="primary"></LinkedInIcon>

            <TwitterIcon color="primary"></TwitterIcon>

            <InstagramIcon color="primary"></InstagramIcon>
          </Typography>
        </CardContent>
      </Collapse>
    </div>
  );
}

const   scrollToSection = () => {
    scroller.scrollTo("apply", {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
    });
}
