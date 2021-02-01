import React, { useEffect, useState } from 'react';
import {
    Card, Button, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import ReactHtmlParser from "react-html-parser";
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import APIURL from "../helpers/environment"

const GrabacionesfetchChild = (props) => {

    const [sessionToken, setSessionToken] = useState("")

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setSessionToken(localStorage.getItem("token"))
        }
        console.log(localStorage.getItem("token"))
        // post();
    }, [])

    const { description, date, title, audio, video } = props.recording;

    const Delete = () => {
        fetch(`https://templo-betel-server.herokuapp.com/recording/delete/${props.recording.id}`, {
            method: "Delete",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            }),
        }).then(() => {
            refreshPage();
        });
    };

    function refreshPage() {
        window.location.reload(true);
    }

    const deleteBotton = () => {
        // let posttoken = localStorage.getItem("token")
        if (sessionToken === "undefined") {
            return ""
        } else if
            (sessionToken === localStorage.getItem("token")) {
            return (<Button onClick={() => { Delete(); }}>Delete</Button>)
        } else {
            return ""
        }

    }


    return (<div>
        {/* {title}<br />
        {date}<br />
        {type}<br />
        {recording}<br />
        {ReactHtmlParser(description)} */}
        <Card>
            {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
            <CardBody>
                <CardTitle tag="h5">Titulo: {title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Fecha: {date}</CardSubtitle>
                <CardText>
                    <b>Video:</b>
                    <ReactPlayer className='react-player' url={video} width='100%' height='100%' controls/>
                    <b>Audio:</b><br />
                    <ReactAudioPlayer src={audio} controls /><br />
                    <b>Descripcion:</b>{ReactHtmlParser(description)}
                </CardText>
                {/* <Button onClick={() => { Delete(); }}>Delete</Button> */}
                {deleteBotton()}
            </CardBody>
        </Card>


    </div>);
}

export default GrabacionesfetchChild;