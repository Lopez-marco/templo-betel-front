import React, { useEffect, useState } from 'react';
import { CardDeck } from 'reactstrap';
import GrabacionesfetchChild from "./GrabacionesfetchChild"

const GrabacionesFetch = (props) => {

    const [recording, setRecording] = useState([]);


    const fetchrecording = () => {
        fetch(`https://templo-betel-server.herokuapp.com/recording/all`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",

            }),
        })
            .then((res) => res.json())
            .then((results) => {
                setRecording(results);
                console.log(results);
            });
    };

    function displayCards() {
        return recording.map((result, index) => (
            <GrabacionesfetchChild
                updateToken={props.sessionToken}
                key={index}
                recording={result}
            />
        ));
    }

    useEffect(() => {
        fetchrecording();
    }, []);

    return (<div>
        <CardDeck>
            {displayCards()}
        </CardDeck>

    </div>);
}

export default GrabacionesFetch;