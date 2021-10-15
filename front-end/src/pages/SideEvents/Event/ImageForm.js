
import React from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },

});

class ImageUploadCard extends React.Component {
    state = {
        mainState: "initial", // initial, search, gallery, uploaded
        imageUploaded: 0,
        selectedFile: []
    };

    handleUploadClick = event => {
        console.log();
        var file = event.target.files[0];
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            this.setState({
                selectedFile: [reader.result]

        });

        }.bind(this);
        console.log(event.target.files);
        this.setState({
            mainState: "uploaded",
            selectedFile: event.target.files,
            imageUploaded: 3
        });
    };



    renderInitialState() {
        const {classes, theme} = this.props;
        const {value} = this.state;

        return (
            <React.Fragment>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={this.handleUploadClick}
                        />
                        <label htmlFor="contained-button-file">
                            <Fab component="span" className={classes.button}>
                                <AddPhotoAlternateIcon/>
                            </Fab>
                        </label>

                    </Grid>
                </CardContent>
            </React.Fragment>
        );
    }


    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <Card className={this.props.cardName}>
                        {this.renderInitialState()}


                    </Card>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ImageUploadCard);
