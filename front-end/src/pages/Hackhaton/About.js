import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({

    root: {
        width: 'auto',
        minHeight: '528px',
        marginRight: '30px'
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

    titile: {
        color: "red",
        display: 'flex',
        justifyContent: 'end',
        textAlign: 'center'
    },
    btn: {
        marginTop: "60px",
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
                title="1.1	About "
                subheader="Event summery:!                                                             "
            />
            <CardContent>
                <Typography paragraph>HACKHATON COMPETITION:</Typography>

                <Typography paragraph>
                    Noosphere Affairs P.L.C in collaboration with International
                    Intellectual School and EtherNet is organizing a Hackathon competition
                    in Addis Ababa, Ethiopia. The event will consist of two days engaging
                    up to 100 young developers in a Hackathon, with winners receiving
                    opportunities of lifetime.
                </Typography>
                <Typography variant="h4" color="textSecondary">
                    Goal:
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
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        <Typography variant="h5">Rewards:</Typography>
                        The goal of the competition is to inspire Ethiopian youth to apply
                        technological experience, coding and software development, and work
                        with them to uncover solutions that are practical & technological to
                        challenges in their community.
                    </Typography>
                    <Typography paragraph> Register:</Typography>
                </CardContent>
            </Collapse>
        </div>
    );
}
