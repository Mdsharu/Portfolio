import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import QKart from "../../Assets/Projects/QKart-project.png";
import QTrip from "../../Assets/Projects/QTrip-project.png";
import ETL from "../../Assets/Projects/ETL.webp";
import TTS from "../../Assets/Projects/TTS-project.png";
import Cargo from "../../Assets/Projects/Cargo-project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={ETL}
              isBlog={false}
              title="MDDI Framework - ETL"
              description="Architected a Metadata-Driven Data Integration (MDDI) framework leveraging Python, PySpark, and Spark SQL to streamline ETL workflows for large-scale data 
              integration tasks. The framework dynamically adapts to metadata changes and supports seamless ingestion from diverse sources, including ADLS, APIs, AWS S3, Azure 
              Blob Storage, and relational databases, ensuring scalability and efficiency across data pipelines."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QKart}
              isBlog={false}
              title="QKart"
              description="An E-Commerce Application that offers a diverse product catalog for customers. Implemented key features such as user registration, JWT-based authentication, 
              dynamic cart management functionality, and ensured secure payment checkout. Integrated RESTful APIs for seamless data flow and conducted thorough unit and integration testing to ensure 
              application reliability and performance."
              ghLink="https://github.com/Mdsharu/QKart"
              demoLink="https://qkartapp-dynamic.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QTrip}
              isBlog={false}
              title="QTrip"
              description="A website enabling users to explore cities, discover adventures, and seamlessly make reservations. Designed dynamic, responsive web pages using HTML, CSS, 
              and JavaScript, implementing API calls, DOM manipulation, and client-side routing for a smooth user experience that meets users expectation. Utilized jQuery to streamline reservation form validation 
              and submission, ensuring efficient and secure data handling."
              ghLink="https://github.com/Mdsharu/QTrip-Dynamic"
              demoLink="https://qtrip-dynamic-frontend-mdsharu.netlify.app/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TTS}
              isBlog={false}
              title="TTS & STT"
              description="Text-to-Speech & Speech-to-Text is a site that helps the users to transform their Text into Speech (TTS) and
              Speech into Text Format with their own preferable voices with multiple accent efficiently. Build using Python library Speech Recognition for performing various speech recognition across sites."
              ghLink="https://github.com/Mdsharu/ConverT-A.github.io"
              demoLink="https://mdsharu.github.io/ConverT-A.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cargo}
              isBlog={false}
              title="Cargo Management System"
              description="A website that assist users to track their freights using their respective tracking I'd that are generated post shipment. Developed an unique User Interface for a better customer's interaction and acquiring their freight's information without tedious steps to be followed and handled it effectively."
              ghLink="https://github.com/Mdsharu/CargoExp"
              demoLink="https://mdsharu.github.io/CargoExp/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
