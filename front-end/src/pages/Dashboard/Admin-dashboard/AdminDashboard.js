import React from 'react';
import {Box, FormControl, FormControlLabel, Grid, Typography, withStyles} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import backEndApi from '../../../services/api'
import {Redirect} from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@material-ui/core/IconButton";

const useStyles = theme => ({
    root: {
        marginTop: '20px',
    },
    table: {
        minWidth: 650,
    },
    tableContainer: {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#eeeeee',
    },
    margin: {
        margin: '5px',
        fontSize: '15px',
        borderRadius: '4px',
        "&:hover": {backgroundColor: '#3A6351'},
    },
    iconBackgroundRed: {
        backgroundColor: 'rgba(228,130,87,0.21)'
    },
    deleteIcon: {
        color: '#F24545'
    },
    editIcon: {
        color: '#E48257'

    },
    iconBackgroundBlack: {
        backgroundColor: 'rgba(57,50,50,0.2)'
    },
    formControlLabel: {
        marginTop: '8px',
        marginBottom: '8px',
        display: 'flex',
        padding: '5px 0',
        justifyContent: "space-between",
        "& span": {},

        "& svg": {
            boxSizing: 'border-box',
            borderRadius: '0px',

        },
        "& .MuiRadio-colorPrimary.Mui-checked": {
            color: 'rgb(90,109,255)',

        },
        "& .MuiRadio-root": {
            color: '#747474',

        }

    },
    formControlCustom: {
        marginTop: '5px'
    },
    allLaunchesLabel: {
        border: '0.5px solid rgba(228, 130, 87, 0.3)',
        borderRadius: '5px',

    },
    myCheckbox: {
        marginLeft: '125px',
        width: '22px',
        height: '22px',
        boxSizing: 'border-box',
        borderRadius: '4px',

        "& .Mui-checked": {
            border: '0px solid #393232'
        }
    },
});


class AdminDashboard extends React.Component {
    state = {eventDocs: [], isReRender: false, filterSelected: '', isRedirect: false, redirectTo: ''};
    componentDidMount = async () => {
        const config = {
            headers: {
                'x-access-token': JSON.parse(localStorage.getItem('token')).token
            }
        };
        const response = await backEndApi.get('/dashboard', config);
        console.log(response.data);
        this.setState({
            eventDocs: response.data.eventDocs,

        });
    };

    onRadioGroupChange = async (e) => {
        console.log(e.target.value);
        this.setState({filterSelected: e.target.value});
        const config = {
            headers: {
                'x-access-token': JSON.parse(localStorage.getItem('token')).token
            },
            params: {filter: e.target.value}
        };
        const response = await backEndApi.get('/dashboard', config);
        this.setState({eventDocs: response.data.eventDocs});
        console.log(response.data.product)
    };
    reRender = (isReRender) => {
        this.setState({isReRender: isReRender})
    };
    onTableRowClick = (row) => {
        console.log(row._id);
        this.setState({isRedirect: true, redirectTo: row._id})
    };
    onDeleteClick = async (user) => {
        const response = await backEndApi.get('/deleteUser', {params: {id: user}});
        window.location.reload();
    };

    render() {
        const {classes} = this.props;
        if (this.state.isRedirect) {
            return <Redirect
                to={`/adminDetail/${this.state.redirectTo}`}
            />
        }
        if (this.state.isReRender) {
            window.location.reload(false);

        }
        return (
            <Grid container className={classes.root} spacing={4}>
                <Grid item md={9}>
                    <Box>
                        <Grid container>
                            <Grid item xs={3} md={3}>
                                <Typography variant='h5' style={{marginBottom: '20px'}}>Users List</Typography>
                            </Grid>


                        </Grid>
                        <Box><TableContainer component={Paper} className={classes.tableContainer}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow id="userInfo">
                                        <TableCell>
                                            <Typography variant='h6' style={{fontSize: '16px'}}>Name</Typography>
                                        </TableCell>
                                        <TableCell style={{textAlign: 'center'}}>
                                            <Typography variant='h6' style={{fontSize: '16px'}}>Email</Typography>
                                        </TableCell>
                                        <TableCell style={{textAlign: 'center'}}>
                                            <Typography
                                                variant='h6' style={{fontSize: '16px'}}>Action</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.eventDocs ?
                                        this.state.eventDocs.map((row) => (
                                            <TableRow key={row._id}>
                                                <TableCell component="th" scope="row" style={{width: '15%'}}>
                                                    {row.name}
                                                </TableCell>
                                                <TableCell style={{textAlign: 'center', width: '20%'}}>
                                                    {row.email}
                                                </TableCell>
                                                <TableCell style={{textAlign: 'center', width: '20%'}}>
                                                    <IconButton
                                                        onClick={() => this.onDeleteClick(row._id)}><DeleteForeverIcon/></IconButton>
                                                </TableCell>
                                            </TableRow>
                                        )) : ""}
                                </TableBody>
                            </Table>
                        </TableContainer></Box>
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <Grid container>
                        <Grid item>
                            <Typography variant='h5' style={{
                                marginBottom: '9px'
                            }}> Admin Page</Typography>
                        </Grid>

                    </Grid>
                    <Box container style={{
                        marginTop: '10px',
                        backgroundColor: '#eeeeee',

                        boxShadow: '-9px 9px 16px rgba(0, 0, 0, 0.05)',
                        borderRadius: '5px'
                    }}>
                        <div>
                            <ol style={{margin:'10%'}}>
                       <li style={{margin:'10%'}}> <Typography>Admin can see list of user.</Typography></li>
                       <li style={{margin:'10%'}}> <Typography>Admin can delete a user who has wrong data.</Typography></li>
                            </ol>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        );
    }

}

export default withStyles(useStyles)(AdminDashboard);

