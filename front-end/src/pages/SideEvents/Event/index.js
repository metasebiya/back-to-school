import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Link,
    Typography,
    withStyles
} from '@material-ui/core';
import backEndApi from "../../../services/api";
const useStyles = ((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:20,
        [theme.breakpoints.down('sm')]:{
            padding:0,
            margin:0,
        }
    },
    media: {
        paddingTop: '56.25%',
    },
    card: {},

    searchBarHolder:{
        position:'relative',
        width: '70%',
        padding:0,
        margin:0,
        paddingBottom:'20px',

        "&:focus-within":{
            transform: "scale(1.025)",

        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding:0,
            margin:0

        }
    },
    searchBar: {
        border:'0.2px solid #b5afaf',
        paddingTop:10,
        paddingBottom:10,
        width: '100%',
        fontSize:'20px',
        borderRadius: '50px',
        paddingLeft:'50px',
        height:'50px',
        outline:'none',
        "&:hover": {
            boxShadow: "1px 1px 1em #c4c4c4",
            outline:'none',

        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'20px',

        }
    },

}));

class MainBody extends React.Component {
    state = {eventDocs: [], images:[], keyword:''};

    onInputChange = (e) =>{
        e.preventDefault();
        this.setState({keyword:e.target.value})
    };
    onFormSubmit = async (e) =>{
        e.preventDefault();
        let q = this.state.keyword;
        const {data} = await backEndApi.get('/search', {params:{q:q}});
        this.setState({eventDocs: data});
        this.props.history.push(`/search?q=${q}`)

    };
    render() {
        const local = 'http://localhost:5001';
        const {classes} = this.props;

        return (
            <Container maxWidth='md' className={classes.root}>
                <Typography>See The Available Events</Typography>
                <form className={classes.searchBarHolder} onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.keyword} placeholder="Megenagna" className={classes.searchBar} onChange={this.onInputChange}/>
                    <i className="fas fa-search fa-lg"
                       style={{position: 'absolute', left: 15, top: 19, opacity: '0.4'}}></i>
                </form>

                <Grid container spacing={4}>
                    {this.state.eventDocs?this.state.eventDocs.map((event) => (
                        <Grid item key={event._id} xs={12} sm={6} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardContent style={{paddingBottom:0}}>
                                        <Typography gutterBottom variant="body1" component="h2">
                                            {event._doc.location}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions  style={{display:'flex', justifyContent:'flex-end', width:'100%',  paddingTop:0, paddingRight:30}}>
                                </CardActions>
                            </Card>
                        </Grid>

                    )):''}

                </Grid>
            </Container>
        );
    }

}

export default withStyles(useStyles)(MainBody);


