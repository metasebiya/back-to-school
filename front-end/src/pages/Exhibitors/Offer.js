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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    marginBottom: "20px",
    display:'flex',
    flexDirection:'row'
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
    color: "green",
    maxWidth:'30%',
    marginRight:'10%'
  },
  btn: {
    marginTop: "60px",
  },
}));

export default function Offer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.titile}

        title="WHAT WE OFFER "
        subheader=" Our platform is a gateway for local & international institutions
        from over 116 countries worldwide to come together for a mutual cause,
        to create uncommon freedom for scholars to connect with the right
        institutions and form professional ties based on grounds of interest. "
      />

      <ol type="A" style={{display:'flex',justifyContent:'center',marginTop:'5%'}}>
        <Typography paragraph style={{display:'flex',marginTop:'-1%',marginRight:'-10%'}}>List of Exhibitors:</Typography>
        <CardContent>
          <li>Government Education Bureaus & Policy Makers </li>
          <li>Local/International Schools, Colleges and Universities</li>
          <li>Local/International Online Education Centers </li>
          <li>Digital Libraries </li>
          <li>Technic and Vocational Institutions </li>
          <li>Local/International Foundations </li>
          <li>Educational and/or Research Centers </li>
          <li>Special Needs and Inclusive Education Centers </li>
          <li>Art and Cultural Institutions/Centers </li>
          <li>Tourism and Hospitality Institutions/ Organization </li>
          <li>Theological Colleges/Universities </li>
          <li>Professional Associations </li>

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
            <Typography>
              <li>International Development Cooperative organization  </li>
              <li>Educational Material Producers and Suppliers  </li>
              <li>Financial Organizations & Online Payment Platforms  </li>
              <li>Corporate and International Recruiters  </li>
              <li>Innovators and Entrepreneurs  </li>
            </Typography>

            <Typography paragraph>
              <li>Technology Companies  </li>
              <li>Embassies  </li>
              <li>Language, COC, and International exam Centers  </li>
              <li>Social entrepreneurs  </li>
              <li>Non Profit Organization </li>
              <li>Others </li>
            </Typography>
          </CardContent>
        </Collapse>
      </ol>
    </Card>
  );
}
