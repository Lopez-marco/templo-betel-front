import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/signup`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                props.updateToken(data.sessionToken);
                props.togglepopup();
                refreshPage();
            });
    };

    function refreshPage() {
        window.location.reload(true);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="Email">UserName</Label>
                    <Input
                        onChange={(e) => setUserName(e.target.value)}
                        name="Email"
                        value={username}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        value={password}
                        minlength="5"
                        required
                    />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    );
};

export default Signup;
