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

export default function AboutCard2() {
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
                subheader="C. Recruitment and Training Service Delivered"
            />
            <CardContent>
                <Typography  component="p">
                    {/*//variant="body2" color="textSecondary"*/}
                    <ol>
                        <li> Debredamo International Hotel, on January 2019.</li>
                        <li> Kuriftu Resort, on April 2018 & March 2019. </li>
                        <li> Abuchii Restaurant, a high-end Italian Restaurant, on May 2016. </li>
                        <li> Kehek Delicatessen P.L.C, A high-class Belgium Restaurant, on April 2016.</li>
                        <li> EDOUARD GARABEDIAN, an Armenian liquor importer Company, the first in Ethiopia, on January 2016.</li>
                    </ol>
                </Typography>
            </CardContent>
        </Card>
    );
}
