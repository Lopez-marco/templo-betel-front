import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Parallax } from "rc-scroll-anim";
import bible from "../assets/bible.png";
import podium from "../assets/podium.png";
import pray from "../assets/pray.png";

const Servicios = (props) => {
  return (
    <div id="Servicios">
      <br />
      <Container className="themed-container" fluid="xl">
        <Row>
          <Col sm="3">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card body style={{ textAlign: "center" }}>
                <CardTitle>Martes</CardTitle>
                <CardText>
                  <img src={bible} style={{ height: 70, width: 70 }} alt="biblia" />
                  <br />
                  Estudios Biblicos
                  <br /> 7:00pm <br />
                  <br />
                  <br />
                </CardText>
              </Card>
            </Parallax>
          </Col>
          <Col sm="3">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
              style={{ transform: "translateY(0px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card body style={{ textAlign: "center" }}>
                <CardTitle>Jueves</CardTitle>
                <CardText>
                  <img src={podium} style={{ height: 70, width: 70 }} alt="Podium" />
                  <br />
                  Servicios
                  <br />
                  (Varones, Damas, Jovenes, Niños)
                  <br />
                  7:00 pm
                </CardText>
              </Card>
            </Parallax>
          </Col>
          <Col sm="3">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
              style={{ transform: "translateY(0px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card body style={{ textAlign: "center" }}>
                <CardTitle>Viernes</CardTitle>
                <CardText>
                  <img src={pray} style={{ height: 70, width: 70 }} alt="Oracion" />
                  <br />
                  Oracion
                  <br />
                  8:00 pm
                  <br />
                  <br />
                  <br />
                </CardText>
              </Card>
            </Parallax>
          </Col>
          <Col sm="3">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card body style={{ textAlign: "center" }} >
                <CardTitle>Domingo</CardTitle>
                <CardText>
                  <img src={bible} style={{ height: 70, width: 70 }} alt="Biblia" /><img src={podium} alt="Podium" style={{ height: 70, width: 70 }} />
                  <br />
                  Escuela Dominical
                  <br /> 10:00 am <br />
                  Servicio
                  <br />
                  6:00 pm
                </CardText>
              </Card>
            </Parallax>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default Servicios;
