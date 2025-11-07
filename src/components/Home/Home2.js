import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../Assets/dinesh.jpg" 
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Just <span className="purple"> hear me out </span> buddy .
            </h1>
            <p className="home-about-body">
                I'm a software engineer who turns ideas into robust, scalable products. Over the years I've worked with a variety of technologies and now focus on building high-performance systems and intuitive user experiences.

              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                   C++,JavaScript, Node.js, Next.js , MongoDB and Mysql  {" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Machine Learning,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={img} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
