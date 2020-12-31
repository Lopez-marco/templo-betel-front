import React, { useState } from "react";
import { Parallax } from "rc-scroll-anim";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const Altar = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <div class="parallaxAltar">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.0, 0.5] }}
          style={{ transform: "translateX(100px)", opacity: 0 }}
          className="code-box-shape"
        >
          {/* className="justify-content-md-center" */}
          <Container className="themed-container" fluid="sm">
            <Row xs="3">
              <Col xs="3"></Col>
              <Col xs="6">
                <Card className="pray justify-content-center" body >
                  <CardTitle>Necesitas Oracion?</CardTitle>
                  <CardText>
                    Estas pasando por un timpo duro? <br />
                    Enfermedad? Problemas?
                    <br />{" "}
                  </CardText>
                    <Button color="danger" onClick={toggle}>
                      Pide oracion{buttonLabel}
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                      <ModalHeader toggle={toggle} close={closeBtn}>
                        Pide Oracion
                      </ModalHeader>
                      <ModalBody>
                        No se requiere llenar todo el fomulario si usted no
                        gusta.
                        <br />
                        Toda la informacion puesta aqui no es compartida con
                        nadie.
                        <br />
                        Se recomienda llenar email o numbero de telefono si
                        quiere ser contactado para seguir su peticion.
                        <br />
                        <br />
                        <Form
                          action="https://formspree.io/f/mgepprka"
                          method="POST"
                        >
                          <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                              type="email"
                              name="email"
                              id="exampleEmail"
                              placeholder="Email"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleEmail">Nombre</Label>
                            <Input
                              type="text"
                              name="name"
                              id="ename"
                              placeholder="Nombre"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleNumber">
                              Numbero de telefono
                            </Label>
                            <Input
                              type="number"
                              name="number"
                              id="exampleNumber"
                              placeholder="Agrege su numero si desea ser contactado"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleText">Descripcion de la Peticion</Label>
                            <Input
                              type="textarea"
                              name="text"
                              id="exampleText"
                            />
                          </FormGroup>
                          <Button color="primary"type="submit">Enviar</Button>
                        </Form>
                      </ModalBody>
                    </Modal>
                </Card>
              </Col>
              <Col xs="3"></Col>
            </Row>
          </Container>
        </Parallax>
      </div>
    </div>
  );
};

export default Altar;
