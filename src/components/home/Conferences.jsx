import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Conferences = ({ heading, message, data }) => {
  const jumbotronStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const carouselItemStyle = {
    textAlign: "center",
    paddingLeft: "10em",
    paddingRight: "10em",
    paddingBottom: "5em",
}

  return (
    <Jumbotron id="conferences" className="m-0" style={jumbotronStyle}>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div>
          <Carousel>
            {data.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <div style={carouselItemStyle}>
                    <h3>{item.title}</h3>
                    <p>
                      <strong>Conference:</strong> {item.conference}
                    </p>
                    <p>
                      <strong>Authors:</strong> {item.authors}
                    </p>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
    </Jumbotron>
  );
};

export default Conferences;

