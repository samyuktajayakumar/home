import React from "react";
import { Jumbotron } from "./migration";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Research = ({ heading, message, data }) => {
  const jumbotronStyle = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <Jumbotron id="research" className="m-0" style={jumbotronStyle}>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row xs={1} md={2} className="g-4">
            {data.map((item, index) => {
                return (
                    <ResearchSection item={item}></ResearchSection>
                )
            })}
        </Row>
    </Jumbotron>
  );
};

function ResearchSection({ item }) {
    const cardStyle = {
        color: "white",
    }
    return (
        <Col>
            <Card bg="black" style={cardStyle}>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle><strong>Duration:</strong> {item.duration}</Card.Subtitle>
                    <Card.Text>
                        <ul>
                            {item.bulletPoints.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Research;

