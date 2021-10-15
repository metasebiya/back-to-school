import React, {useEffect, useState} from 'react'
import './style.css'
import backEndApi from "../../../services/api";
import {Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import eventCard from "../User-dashboard/UserCard";
import Container from "@material-ui/core/Container";


function Detail(props) {
    const local = 'http://localhost:5000';
    const [data, setData] = useState([]);
    const [files, setFiles] = useState([]);

    const [isReload, setIsReload] = useState(false);

    const [activeImg, setActiveImg] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const {data} = await backEndApi.get('/admindetail', {params: {id: props.match.params.id}});
            console.log(data);
            setData(data);
        };
        getData();

    }, []);

    useEffect(() => {

    }, []);

    // const onButtonClick = async (value, id) => {
    //     const buttonClicked = {
    //         id: id,
    //         selectedButton: value,
    //     };
    //     const response = await backEndApi.post('/addevent', {params: buttonClicked});
    //     setIsReload(true)
    //
    // };

    if (!props.getToken()) {
        return <Redirect to='/login'/>
    }

    return (
        <div className='root'>
            <Container>
                <div style={{display: 'flex', gap: '20px', flexWrap:'wrap'}}>
                    {data ? data.map((event) => {
                        return <eventCard eventDetail={event} key={event._id}/>
                    }) : ''}
                </div>
            </Container>
        </div>
    );
}

export default Detail
