import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import classnames from "classnames";
import Post from "./GrabacionesPost"
import GrabacionesFetch from "./Grabacionesfetch"

const Grabaciones = (props) => {

  const [sessionToken, setSessionToken] = useState("")


  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
    console.log(localStorage.getItem("token"))
    // post();
  }, [])

  const post = () => {
    // let posttoken = localStorage.getItem("token")
    if (sessionToken === "undefined") {
      return ""
    } else if
      (sessionToken === localStorage.getItem("token")) {
      return (<NavLink
        className={classnames({ active: activeTab === "3" })}
        onClick={() => {
          toggle("3");
        }}
      >
        Post
      </NavLink>)
    } else {
      return ""
    }

  }

  return (
    <div id="grabaciones">
      <div class="parallaxGrabaciones">
        <br />
        <Container className="themed-container" fluid="xl">
          <Card>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }} style={{ borderRadius: 40 }}
                >
                  Audio Grabaciones
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Video Grabaciones
              </NavLink>
              </NavItem> */}
              <NavItem>
                {post()}
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Card body style={{ border: "red" }}>
                      {/* <CardTitle>Coming Soon</CardTitle> */}
                      <CardText >
                        <GrabacionesFetch updateToken={props.sessionToken} />
                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Card body style={{ border: "red" }}>
                      <CardText>
                        Video
                    </CardText>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <Card body style={{ border: "red" }}>
                      <CardText>
                        <Post />
                      </CardText>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Container>
        <br />

      </div>
    </div>
  );
};

export default Grabaciones;
