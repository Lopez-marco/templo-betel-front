import React from "react";
import { Row, Col } from "reactstrap";
import logo from "../assets/Dalila4.png"
import heart from "../assets/heart.png"
import Login from "./auth/auth"
import { LinkedinOutlined, FolderOpenOutlined, GithubOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons"


const Footer = (props) => {
  return (
    <div>
      {/* // <Container className="footer" style={{marginLeft: 0}}> */}
      {/* <Row> */}

      <Row className="footer">
        <Col sm="1"><img src={logo} style={{ width: 150, marginTop: 40 }} alt="Logo"></img> </Col>
        <Col sm="2" style={{ marginTop: 70, marginLeft: 25 }}>
          <span>1741 Luther St,</span><br />
          Indianapolis, IN 46203<br />
          Church Email
        </Col>

        <Col sm="3" style={{ marginTop: 70 }}>
          <a href="#about" style={{ textDecoration: "none" }} >La iglesia</a><br />
          <a href="#Servicios" style={{ textDecoration: "none" }} >Servicios</a><br />
          <a href="#blog" style={{ textDecoration: "none" }} >Blog</a><br />
          <a href="#grabaciones" style={{ textDecoration: "none" }} >Grabaciones</a><br />
        </Col>
        <Col sm="2" style={{ marginTop: 70 }} >Conectate con Nosotros<br />
          <a href="https://www.facebook.com/profile.php?id=100007964058248" style={{ textDecoration: "none" }} ><FacebookOutlined style={{ width: 40, fontSize: '25px', color: "black" }} /></a>
          <a href="mailto:webmaster@example.com"><MailOutlined style={{ width: 40, fontSize: '25px', color: "black" }} /> </a>
          </Col>
        <Col sm="2"><iframe title="map" src="https://www.google.com/maps/d/embed?mid=1vMEY2wrvrl4_13z6nq8uqwJRgueQ2evz" width="300" height="300"></iframe></Col>
      </Row>
      <Row className="footer2">
        <Col style={{ textAlign: "center" }}><br />
          Hecho con <img src={heart} style={{ width: 14 }} alt="heart" ></img> por Marco Lopez <br />
          <a href="https://www.linkedin.com/in/marco-lopez-hdez/"><LinkedinOutlined style={{ width: 20, color: "black" }} /></a>
          <a href="https://lopez-marco.github.io/"><FolderOpenOutlined style={{ width: 20, color: "black" }} /></a>
          <a href="https://github.com/Lopez-marco"><GithubOutlined style={{ width: 20, color: "black" }} /></a><br />
          © 2020 All Rights Reserved. <Login updateToken={props.updateToken} />
        </Col>
      </Row>
      {/* </Row> */}
      {/* // </Container> */}
     </div>
  );
};

export default Footer;
