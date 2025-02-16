import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A CLOSER LOOK AT MY <span className="purple"> EXPERTISE </span>
            </h1>
            <p className="home-about-body">
              I have developed a strong passion for programming and continuously expanded my expertise throughout my journey
              <br />
              <br />I am proficient in programming languages such as
              <i>
                <b className="purple"> Python, Javascript and Java, </b>
              </i> as well as in working with relational databases like <i><b className="purple">MySQL, Microsoft SQL Server, PostgreSQL,</b></i> alongside non-relational databases like MongoDB.
              <br />
              <br />
              My areas of interest include designing and implementing scalable data pipelines, optimizing big data workflows, and exploring advancements in cloud-based data engineering solutions. &nbsp;
              <br />
              <br />
              Whenever possible, I channel my enthusiasm into building efficient systems using frameworks and tools like <i><b className="purple">PySpark, Apache Hadoop, and Snowflake,</b></i> along with modern programming languages like Python and SQL to drive data-driven solutions and
              <i>
                <b className="purple">
                  {" "}
                  Modern Python Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Pandas, NumPy, Matplotlib, and much more...</b>
              </i>
              <br />
              <br />
              I have earned certifications in Microsoft Azure, including the <i><b className="purple">'Microsoft Certified Fabric Analytics Engineer Associate'</b></i> and the <i><b className="purple">'Microsoft Certified Azure Data Engineer'. </b></i> These certifications reflect my expertise in designing, implementing, and optimizing data solutions on the Azure platform. They demonstrate my ability to work with advanced analytics tools, cloud-based data engineering solutions, and enterprise-grade systems to deliver scalable and efficient data workflows.
              <br />
              <br />
              Additionally, I have completed my <i><b className="purple">Fellowship in Software Development - Full Stack Specialization and being a Crio Certified Software Developer,</b></i> demonstrating my proficiency in building robust, end-to-end software solutions and full-stack applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img 
              src={myImg} 
              className="img-fluid" 
              alt="profile pic" 
              style={{
                borderRadius: "50%",
                width: "350px",
                height: "350px",
                objectFit: "cover",
                maxWidth: "100%"
              }} 
            />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mdsharu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Md_Sharu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Mdsharu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mhd.sharique/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
