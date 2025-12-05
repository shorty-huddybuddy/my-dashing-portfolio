import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { BsGithub } from "react-icons/bs";
import leaf from "../../Assets/Projects/cifar.png";
import editor from "../../Assets/Projects/college-community.png";
import finaura from "../../Assets/Projects/finaura.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/dookan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finaura}
              isBlog={false}
              title="Finaura"
              description="Finaura is an AI-powered financial assistant that simplifies investment planning, portfolio management, and financial education. It empowers users with real-time insights, personalized suggestions, and smart financial tools — all in one seamless platform."
              ghLink="https://github.com/shorty-huddybuddy/Finaura"
              demoLink="https://finaura-kohl.vercel.app/"
              techStack={[
                "Next.js",
                "Go (Golang)",
                "Python",
                "Firebase",
                "Gemini API/Models",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dookan"
              description="A modern e-commerce platform built with Next.js,Sanity CMS, Clerk authentication, and Stripe payments."
              ghLink="https://github.com/shorty-huddybuddy/Dookan-Ecommerce"
              demoLink="https://ecommerce-dinesh.vercel.app/"
              techStack={["Next.js", "Sanity", "Stripe", "Clerk", "Vercel"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Connect IIITA"
              description="A full-stack community web platform built for the students of IIIT-Allahabad. This platform enables communication, collaboration,and resource sharing among peers."
              ghLink="https://github.com/shorty-huddybuddy/collegeCommunitySoftware/tree/Dinesh"
              techStack={[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CIFAR-10 Image Classification"
              description={
                "CIFAR-10 image classification project. Includes training & inference scripts for multiple model architectures (SimpleCNN, ResNet18, MobileNetV2). Designed to run locally and easy to commit to GitHub. " +
                "Scripts cover dataset loading, training loops, evaluation and saving/loading models (see scripts/models.py for implementations)."
              }
              ghLink="https://github.com/shorty-huddybuddy/cifar10_image_classification"
              // demoLink="https://plant49-ai.herokuapp.com/"
              techStack={["Python", "Machine Learning", "CNN"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Image segmentation with SAM2"
              description={
                "Integration of the Segment Anything Model (SAM2) with the Stretch3 robot using an Intel RealSense camera. " +
                "Includes camera capture, segmentation pipelines, and a parent process to synchronize multiple runtime environments for smooth operation."
              }
              ghLink="https://github.com/shorty-huddybuddy/SAM2"
              techStack={["Python", "OpenCV", "NumPy", "SAM2"]}
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              techStack={["Keras", "TensorFlow", "OpenCV", "CNN"]}
            />
          </Col> */}
        </Row>

        {/* More projects CTA (inside same container, simplified) */}
        <div
          className="more-projects-section"
          style={{
            textAlign: "center",
            padding: "50px 16px",
            marginTop: 30,
          }}
        >
          <h2
            style={{
              color: "white",
              marginBottom: 12,
              fontSize: "1.8rem",
              fontWeight: 700,
            }}
          >
            Want to see <span className="purple">more</span>?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: 24,
              fontSize: "1.05rem",
            }}
          >
            Explore all my projects on GitHub
          </p>
          <a
            href="https://github.com/shorty-huddybuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta-button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: "linear-gradient(135deg, #7b2ff7 0%, #2af598 100%)",
              color: "#fff",
              borderRadius: 50,
              fontSize: "1.1rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(123,47,247,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            <BsGithub size={22} />
            View All Projects on GitHub
          </a>
          <style>{`
            .github-cta-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 12px 32px rgba(123,47,247,0.5) !important;
            }
          `}</style>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
