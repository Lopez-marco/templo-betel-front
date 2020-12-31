import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import Img from "../assets/altar.jpg";
import Imgviera from "../assets/PasViera.JPG";
import ImgVicente from "../assets/PastorVicente.jpg"
import { Parallax } from "rc-scroll-anim";

const Pastorado = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <br />
      <Container className="themed-container" fluid="xl">
        <Row>
          <Col sm="4">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={Imgviera} alt="Pastor Viera" />
                    <h3 style={{ textAlign: "center" }}>Pastor <br />
                  Jose Viera</h3>
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus perspiciatis exercitationem maiores, repellat
                      ab alias aliquam at vitae ratione ipsam nisi cupiditate
                      laboriosam facere repellendus. Laudantium cumque quisquam
                  </p>
                  </div>
                </div>
              </div>
            </Parallax>
          </Col>
          <Col sm="4">
            <div className="container2">
              <div className="card2" style={{ borderRadius: 25 }}>
                <div className="imgBx2">
                  <Button onClick={toggle} style={{ backgroundColor: "white" }} ><img src={Img} alt="Historia" />{buttonLabel}</Button>
                  <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Historial</ModalHeader>
                    <ModalBody>
                              Proximamente
                         </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                  <h2>Historia de la Iglesia</h2>
                </div>
                <div className="content2">
                  <p>
                    proximamente
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
              className="code-box-shape"
            >

              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={ImgVicente} alt="Pastor Vicente" />
                    <h3>Pastor<br />Vicente</h3>
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus perspiciatis exercitationem maiores, repellat
                      ab alias aliquam at vitae ratione ipsam nisi cupiditate
                      laboriosam facere repellendus. Laudantium cumque quisquam
                  </p>
                  </div>
                </div>
              </div>
            </Parallax>
          </Col>

        </Row>
      </Container>
      <br />
    </div>
  );
};

export default Pastorado;