import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <i><span className="purple">Mohammed Sharique</span></i>, a passionate 
            <i><span className="purple"> Data Engineer & Software Developer, </span></i> from <i><span className="purple">Chennai, India</span></i>.
            <br />
            <br />
            Ever since I wrote my first line of code, I’ve been fascinated by how technology 
            can solve complex real world problems. My journey started with an insatiable curiosity for 
            <i><span className="purple"> Programming</span></i>, which led me to earn my 
            <i><span className="purple"> Computer Science Engineering</span></i> degree from Anna University, 
            graduating with an 8.58 CGPA.
            <br />
            <br />
            Currently, I’m working as an <i><span className="purple">Associate Data Science</span></i> at UST Global, 
            where I integrate large-scale data solutions with modern web technologies  
            to drive efficiency and innovation. And specialize in extracting insights from data,
            I thrive in the intersection of data and innovation, With a strong foundation in <i><span className="purple">Big Data</span></i> and  
            <i><span className="purple"> MERN Stack Development</span></i>, I specialize in  
            building scalable data pipelines, optimizing ETL workflows, and designing  
            full-stack applications while constantly learning and improving.
            <br />
            <br />
            <strong>Let's Connect:</strong>  
            <br />
            <a href="mailto:mdshariquek16@gmail.com" className="purple" style={{ textDecoration: "none" }}>
              <FaEnvelope /> mdshariquek16@gmail.com
            </a>
            <br />
            <br />
            When I'm not coding, you’ll find me exploring new skills, trading in the stock market, 
            or unwinding with a good movie.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning Stock Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Self-Reflection & Mindfulness
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Thought-Provoking Movies
            </li>
          </ul>
          <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Data is the new oil, but it must be refined to create value."{" "}
          </p>
          <footer className="blockquote-footer">This speaks to me.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
