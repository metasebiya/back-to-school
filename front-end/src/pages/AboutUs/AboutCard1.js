import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginRight:'10px'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function AboutCard1() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Founder/organizer of"
                subheader="B.Internship & Carrier Expo"
            />
            <CardContent>
                <Typography  component="p">
                    The Internship and Career Fair is our largest recruiting event of the year. Hundreds of undergraduate, graduate students, and alumni form all majors and class years attend in search of internships, job openings, and graduate programs with prospective employers and universities.
                    The friendly and informal character of the event provides a welcome and unique environment for employers, career advisors, education and training providers to communicate directly with jobseekers and students.
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
                    <Typography paragraph>Event Pedigree.</Typography>
                    <Typography paragraph>
                        <ul>
                            <li> 2019,  Dagmawi Menelik Senior Secondary School, on May 10- 12, 1st Edition.</li>
                            <li> 2022, 2nd Edition, coming soon. </li>
                        </ul>
                        <Typography variant="h6"> For all of your event success, Contact us, </Typography>
                            <Avatar alt="Remy Sharp" src="/asset/img/logo.jpg" className={classes.logo}/>

                            <ul>
                                <p>P.O.box: 54178</p>
                                <label> Email :</label>
                                <li> <a href="back2schooleth@gmail.com" > back2schooleth@gmail.com</a></li>
                                <li> <a href="digital@backtoschoolethiopia.org" > digital@backtoschoolethiopia.org</a></li>
                                <li> T1: +25 1974082036</li>
                                <li>  T2: +25 1974082037</li>
                            </ul>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
