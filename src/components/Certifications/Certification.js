import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "../Certifications/CertificationCard";
import Particle from "../Particle";
import dp600 from "../../Assets/cert-dp600.png";
import crio from "../../Assets/cert-crio.png";
import dp203 from "../../Assets/cert-dp203.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
        <i>A showcase of my commitment to continuous learning and professional growth through industry-recognized certifications.</i>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={dp203}
              isBlog={false}
              title="Microsoft Certified: Azure Data Engineer Associate (DP-203)"
              description="Achieved certification validating expertise in designing and implementing data engineering solutions on Microsoft Azure.. 
              Proficient in building and managing data pipelines, performing data transformations, and ensuring efficient data storage and accessibility.
              Demonstrated skills in leveraging tools like Azure Data Factory, Azure Synapse Analytics, Azure Databricks, Azure Storage Account, and Azure Data Lake to deliver scalable and optimized data workflows."
              ghLink="https://learn.microsoft.com/en-us/users/mohammedsharique-4404/credentials/b97af06ebe36ba3e"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={dp600}
              isBlog={false}
              title="Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)"
              description="Achieved certification showcasing expertise in designing, implementing, and managing data analytics solutions using Microsoft Fabric.
              Proficient in building end-to-end analytics pipelines, integrating data from multiple sources, and implementing real-time data processing for advanced insights.
              Demonstrated deep knowledge of Azure Synapse Analytics, Data Factory, and Power BI, focusing on scalable, secure, and performance-optimized data solutions."
              ghLink="https://learn.microsoft.com/en-us/users/mohammedsharique-4404/credentials/47af15bb16cd9175"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={crio}
              isBlog={false}
              title="Crio Certified: Fellowship in Software Development"
              description="A website that is used to plan an activities for travelers where the users can able to browse
              a different cities, adventures and make their reservations effectively. Created dynamic responsive web pages and used JavaScript to make API Calls, DOM
              Manipulation and Routing. Used JQuery to facilitate the reservation form submission"
              ghLink="https://www.crio.do/learn/certificate/mdshariquek16/TRACK_FELLOWSHIP_ADVANCED_FULLSTACK_REACT_NODE/"         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
