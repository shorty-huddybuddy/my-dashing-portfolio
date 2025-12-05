import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const chipStyle = {
    display: "inline-block",
    background: "rgba(123,47,247,0.08)",
    color: "#7b2ff7",
    borderRadius: 16,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginTop: 8,
  };

  return (
    <Card className="project-card-view" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* tech stack chips (inside card) */}
        {props.techStack && props.techStack.length > 0 && (
          <div style={{ marginBottom: "auto" }}>
            {props.techStack.map((t) => (
              <span key={t} style={chipStyle}>
                {t}
              </span>
            ))}
          </div>
        )}
        <div style={{ marginTop: "auto", paddingTop: "15px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
