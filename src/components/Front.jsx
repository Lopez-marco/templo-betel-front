import React from "react";
import { Jumbotron } from "reactstrap";
import Particles from "react-particles-js";
import Logo from "../assets/Dalila.png"

const Front = (props) => {
  return (
    <div>
      <Particles
        className="particulas"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            size: {
              value: 7,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.5,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 2,
                opacity: 7,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <Jumbotron
        className="title"
        style={{
          backgroundColor: "transparent",
          zIndex: 1, textAlign: "center"
        }}
      >
        <h1 className="display-3">
          {" "}
          <br className=".d-none .d-sm-block" />
          <img className="titleimg" src={Logo} alt="Templo Betel" />
          <p className="lead" style={{color:"white"}}>
           Y considerémonos unos a otros para estimularnos al amor y a las buenas obras;
 no dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.
           <br/> Hebreos 10: 24-25
        </p>
        </h1>
      </Jumbotron>

    </div>
  );
};
export default Front;
// 2fd84cfef7