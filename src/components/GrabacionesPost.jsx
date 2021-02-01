import React, { useState, useEffect } from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    Col,
    CardHeader,
} from "reactstrap";
import APIURL from "../helpers/environment";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const GrabacionesPost = (props) => {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [audio, setAudio] = useState("");
    const [video, setVideo] = useState("");
    // const [image, setImage] = useState("");
    // const [photo, setPhoto] = useState("");

    // const [loading, setLoading] = useState(false);

    const [sessionToken, setSessionToken] = useState("");
    ///////////////////////////upload image//////////////
    // const uploadImage = async (e) => {
    //     const files = e.target.files;
    //     const data = new FormData();
    //     data.append("file", files[0]);
    //     data.append("upload_preset", "dev_setup");
    //     setLoading(true);
    //     const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/mlpez/image/upload",
    //         {
    //             method: "POST",
    //             body: data,
    //         }
    //     );
    //     const file = await res.json();

    //     console.log(res);
    //     setImage(file.secure_url);
    //     setLoading(false);
    // };
    //////////////////////////////////////////////////
    ///////////////////////////////edit//////////////////////
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.updateToken);
        fetch(`https://templo-betel-server.herokuapp.com/recording/create`, {
            method: "POST",
            body: JSON.stringify({
                record: {
                    description: value,
                    date: date,
                    title: title,
                    audio: audio,
                    video: video,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: sessionToken,
            }),
        })
            .then((res) => res.json())
            .then((results) => {
                console.log(results);
                setDescription("");
                setDate("");
                setTitle("");
                setAudio("");
                setVideo("")
                // setPhoto("");
                refreshPage();
            });
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setSessionToken(localStorage.getItem("token"));
        }
    }, []);

    function refreshPage() {
        window.location.href = "/";
    }

    const [value, setValue] = useState("");
    /////////////////////handle for editor/////////////
    const handleOnChange = (e, editor) => {
        const data = editor.getData();
        setValue(data);
    };

    return (
        <>
            <Card>
                <CardHeader style={{ backgroundColor: "#4CB0BD" }}>
                    <h5>Add A Recording</h5>
                </CardHeader>
                <br />
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <b>Title</b>
                            <Label htmlFor="make" />
                            <Input
                                name="make"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <b>Date</b>
                            <Label htmlFor="model" />
                            <Input
                                type="date"
                                name="date"
                                placeholder="date placeholder"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <b>Audio</b>
                            <Label htmlFor="type" />
                            <Input
                                type="audio"
                                name="audio"
                                value={audio}
                                onChange={(e) => setAudio(e.target.value)}
                            />
                        </FormGroup>
                        {/* <FormGroup>
                            <b>Description</b>
                            <Label htmlFor="price" />
                            <Input
                                name="price"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup> */}
                        <FormGroup>
                            <b>Video</b>
                            <Label htmlFor="video" />
                            <Input
                                name="video"
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                            />
                        </FormGroup>
                        {/* <FormGroup>
                            <b>Photo </b>
                            <Label htmlFor="photo" />
                            <Input
                                disabled
                                name="photo"
                                value={image}
                                // placeholder={image}
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="file"
                                name="file"
                                placeholder="Upload an image"
                                onChange={uploadImage}
                            />
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                    <img src={image} style={{ width: "300px" }} />
                                )}
                        </FormGroup> */}
                        <FormGroup>
                            <b>Description</b>
                            <CKEditor
                                editor={ClassicEditor}
                                value={description}
                                onChange={handleOnChange}
                            />
                        </FormGroup>
                        <Button type="submit">Click to Submit</Button>
                    </Form>
                </Col>
                <br />
            </Card>
            <br />
            <br />
        </>
    );
};

export default GrabacionesPost;
