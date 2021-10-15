import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({eventDetail}) {
    const [expanded, setExpanded] = React.useState(false);
    let history = useHistory();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const onEditClick = () => {
        history.push(`/editevent/${eventDetail._id}`)
    };
    return (
        <Card sx={{width: 290}}>
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{height:'50px'}}>
                    {eventDetail.description?eventDetail.description.substring(0, 100):''} {eventDetail.description?eventDetail.description.length>100?'...':'':''}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button aria-label="add to favorites" onClick={onEditClick}>
                    Edit
                </Button>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {eventDetail.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
