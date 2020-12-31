import React from "react";
import { Card, CardTitle, CardText, Container, Col, Row } from "reactstrap";
import { Parallax } from "rc-scroll-anim";
import Lord from "../assets/Worship.jpg"

const AboutChurch = (props) => {
  return (
    <div id="about">
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Container className="themed-container" fluid="md">
          <Card body>
            <CardTitle style={{ textAlign: "center" }}>
              Nuestra Iglesia
            </CardTitle>
            <CardText>
              <Row>
                <Col xs="9">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia temporibus dolore earum neque sequi suscipit atque
                  nulla, natus
                  <br />
                  laudantium quod tempora itaque quia eaque ut sapiente eligendi
                  quos, rerum non.
                </Col>
                <Col><img className="image" src={Lord} style={{ width: 300, marginTop: -35 }} alt="Lord" /> </Col>
              </Row>
            </CardText>
          </Card>
        </Container>{" "}
      </Parallax>
      <br />
    </div>
  );
};

export default AboutChurch;
