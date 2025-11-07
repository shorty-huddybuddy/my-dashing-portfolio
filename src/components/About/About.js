import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                This is who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard
                experience={[
                  {
                    company: "Indian Air Force",
                    role: "SDE - Android Dev. Intern",
                    duration: "Jun 2025 - Jul 2025",
                    description:
                      "Worked as an Android developer intern building and maintaining mobile features for internal applications.",
                  },
                  {
                    company: "IIIT Allahabad",
                    role: "Undergrad Student",
                    duration: "2022 - Present",
                    description: "Persuing B-tech in Information Technology ",
                  },
                ]}
              />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "rgb(155 126 172)", marginBottom: 6 }}>
                "Strive to build things that make a difference!"
              </p>
              <footer className="blockquote-footer">Dinesh</footer>
            </div>
          </div>

          <h1 className="project-heading">
            Professional <strong className="purple">Skills </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
