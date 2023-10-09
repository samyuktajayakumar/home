import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Research = ({ heading, message, data }) => {
  const jumbotronStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <Jumbotron id="research" className="m-0" style={jumbotronStyle}>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          <Carousel prevIcon={<span>&#8249;</span>} nextIcon={<span>&#8250;</span>}>
            {data.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      <strong>Duration:</strong> {item.duration}
                    </p>
                    <ul>
                      {item.bulletPoints.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Research;

