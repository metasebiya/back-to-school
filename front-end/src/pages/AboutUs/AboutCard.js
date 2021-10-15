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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
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

export default function AboutCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Founder/organizer of"
                subheader="A.	Back to School Ethiopia Expo                                                             "
            />
            <CardContent>
                <Typography  component="p">
                    Back to School Ethiopia Expo is a center of excellence where various Higher Education Institutions (local & international)
                    converge for a common goal: to share their unique and exceptional practices with you.
                    This year's campaign, Think It Up! Will bring you dynamic approaches and workshops that will amaze
                    you with profound insights on how to solve society's problems with style. We work with various local and
                    international institutions that promote the need for special needs and inclusive education within our community.
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
                            <li> 2017,   United Nations Economic Commission for Africa, UNECA-CC, on August 10 – 13, 1st Edition</li>
                            <li> 2018,   Addis Ababa Exhibition Center, on July 6 – 11, 2nd Edition</li>
                            <li> 2019,   Dagmawi Menelik Senior Secondary School, on May 10- 12, 3rd Edition.</li>
                            <li> 2022,   Abrehot Library, February 23 – 27/2022, 4th Edition</li>
                        </ul>
                    </Typography>
                    <Typography paragraph>
                        <Typography> Local & International Events successfully Organized!</Typography>

                        As simply said managing an event is not a task, it is our DNA. Along the way we met with influential decision makers on a global scale that offered us an exceptional international experience and recognition on how to exceed expectations at any cost. For your review, please put a link below.

                        <ul>
                            <li> In collaboration with Titans D’Afrique, based in Kenya, organized A Global Executive Contact Negotiation Training on December 2 & 3/2019 at Nexus Hotel.
                            </li>
                            <li>Co-organized an Eastern Africa Literary and Cultural Conference, 2019, 4th edition, from August 19 – 21/2019 at Roha Hotel, Lalibela, Ethiopia.
                            </li>
                            <li>Organized a new product-launching event for an international company, Diversey Cleaning Service, at Hilton Addis Ababa International Hotel on May 23, 2014. Ethiopian Hotel Owners Association hosted the event.
                            </li>
                            <li>Organized a conference entitled, Promoting International Tourism, in collaboration with Earnest & Young on 2014.
                            </li>
                            <li> Organized a workshop entitled, Invest in Africa, at Addis Ababa Hilton International Hotel on February 2014. CVT Consultancy P.L.C hosted the event.
                            </li>
                        </ul>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
