import React from "react";
import { Jumbotron } from "./migration";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Publications = ({ heading, message, data }) => {
  const jumbotronStyle = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <Jumbotron id="publications" className="m-0" style={jumbotronStyle}>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <Row xs={1} md={2} className="g-4">
        {data.map((item, index) => {
          return (
              <PublicationSection item={item}></PublicationSection>
          )
        })}
      </Row>
    </Jumbotron>
  );
};

function PublicationSection({item}) {
  return (
      <Col>
        <Card bg="white" border="white">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle><strong>Journal:</strong> {item.journal}</Card.Subtitle>
            <Card.Text>
              <ul>
                {item.bulletPoints.map((bullet, i) => (
                    <li key={i}>
                      {bullet.text}
                      {bullet.subPoints && (
                          <ul>
                            {bullet.subPoints.map((subBullet, subIndex) => (
                                <li key={subIndex}>{subBullet}</li>
                            ))}
                          </ul>
                      )}
                    </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  )
}

export default Publications;
