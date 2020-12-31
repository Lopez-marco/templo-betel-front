import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../../helpers/environment"

const Login = (props) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({
                user: { username: username, password: password },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                props.updateToken(data.sessionToken);
                console.log(data.sessionToken)
                let tokens = data.sessionToken
                props.togglepopup();
                if (tokens === undefined) {
                    alert("Fail to login")
                } else {
                    alert("Success")
                    refreshPage();
                }
            });
    };

    function refreshPage() {
        window.location.reload(true);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="Email">Username</Label>
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
                <Button type="submit">Login</Button>
            </Form>
        </div>
    );
};

export default Login;
