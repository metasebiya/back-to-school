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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{minWidth: 290}} >
            <CardContent style={{maxWidth:'100%'}}>
                <Typography variant="body2" color="text.secondary" style={{height:'90px'}}>
                    {eventDetail.description?eventDetail.description.substring(0, 100):''} {eventDetail.description?eventDetail.description.length>100?'...':'':''}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit >
                <CardContent >
                    <Typography style={{width:'100%'}}>
                        {eventDetail.description}
                    </Typography>
                    <Typography> <p style={{backgroundColor:'#cccccc',marginTop:'20px'}}>Event was created On : </p> {eventDetail.dateCreated}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
