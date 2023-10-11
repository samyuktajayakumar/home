import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <a
          rel="noopener"
          href="https://github.com/samyuktajayakumar"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Samyukta Jayakumar
          </span>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
