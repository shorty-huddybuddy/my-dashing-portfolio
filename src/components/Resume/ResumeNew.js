import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Dinesh_Pradhan.pdf";
import { AiOutlineDownload, AiFillGithub } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setShowOverlay(false), 3500);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [showOverlay]);

  const handleRedirect = () => {
    window.open("https://github.com/shorty-huddybuddy", "_blank");
    setShowOverlay(false);
  };

  return (
    <div>
      {showOverlay && (
        <div
          style={{
            position: "fixed",
            zIndex: 99999,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(30, 20, 50, 0.92)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
            fontSize: "2.2rem",
            fontWeight: 700,
            transition: "opacity 0.5s",
            textAlign: "center",
          }}
        >
          <AiFillGithub
            size={90}
            style={{
              marginBottom: 18,
              color: "#fff",
              filter: "drop-shadow(0 0 16px #7b2ff7)",
            }}
          />
          <div
            style={{
              marginBottom: 18,
              fontSize: "2.2rem",
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            Check out my{" "}
            <span style={{ color: "#7b2ff7" }}>GitHub</span> for more!
          </div>
          <div
            style={{
              marginBottom: 30,
              fontSize: "1.2rem",
              fontWeight: 400,
              opacity: 0.85,
            }}
          >
            Explore my projects, code, and open source work.
          </div>
          <button
            onClick={handleRedirect}
            style={{
              padding: "18px 48px",
              fontSize: "1.3rem",
              borderRadius: 40,
              background: "linear-gradient(90deg,#7b2ff7,#2af598)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              boxShadow: "0 4px 24px rgba(43,37,63,0.18)",
              marginBottom: 18,
              transition: "background 0.2s",
              outline: "none",
            }}
          >
            <AiFillGithub
              size={28}
              style={{ verticalAlign: "middle", marginRight: 10 }}
            />
            Go to GitHub
          </button>
          <div style={{ marginTop: 10, fontSize: "1.1rem", opacity: 0.7 }}>
            (This will close automatically)
          </div>
          <div
            style={{
              marginTop: 32,
              animation: "bounceArrow 1.2s infinite",
              fontSize: "2.5rem",
              color: "#7b2ff7",
            }}
          >
            ↓
          </div>
          <style>
            {`
              @keyframes bounceArrow {
                0%, 100% { transform: translateY(0);}
                50% { transform: translateY(16px);}
              }
            `}
          </style>
        </div>
      )}
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
