import React, { useEffect, useState } from 'react';
import { CardColumns } from 'reactstrap';
import GrabacionesfetchChild from "./GrabacionesfetchChild"


const GrabacionesFetch = (props) => {

    const [recording, setRecording] = useState([]);


    const fetchrecording = () => {
        fetch(`http://localhost:3000/recording/all`, {
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
        <CardColumns>
            {displayCards()}
        </CardColumns>

    </div>);
}

export default GrabacionesFetch;