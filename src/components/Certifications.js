import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import developerAssociateImg from  '../assets/Developer_Associate.png';
import CloudPractitionerImg from  '../assets/Cloud_Practitioner.png';
import DeepLearningAIImg from  '../assets/DeepLearningAI.png';

import './Certifications.css';

const certifications = [
    ["AWS Certified Developer – Associate", developerAssociateImg],
    ["AWS Certified Cloud Practitioner", CloudPractitionerImg],
    ["ChatGPT Prompt Engineering for Developers", DeepLearningAIImg],
  ];

const Certifications = ({ language }) => (
  <div className="flex-container statistics">
    <div className={`lang-section ${language === "en" ? "visible" : "hidden"}`}>
      <h2>My certifications & courses</h2>
    </div>
    <div className={`lang-section ${language === "es" ? "visible" : "hidden"}`}>
      <h2>Mis certificaciones y cursos</h2>
    </div>
    <Container>
      <Row>
      {certifications.map(([skill, percent]) => (
          <Col md={4} className="mb-4">
            <div className="d-flex flex-column align-items-center h-100" >
              <img
                src={percent}
                className="img-fluid mb-2 custom-img"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <p className="text-center">{skill}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    <div className={`lang-section ${language === "en" ? "visible" : "hidden"}`}>
      <p>
        Learn about all my licenses and certifications on my&nbsp;
        <strong>
          <a
            href="https://www.linkedin.com/in/nicolas-david-espejo-bernal/?locale=en_US"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn.
          </a>
        </strong>
      </p>
    </div>
    <div className={`lang-section ${language === "es" ? "visible" : "hidden"}`}>
      <p>
        Conoce mis licencias y certificaciones en mi&nbsp;
        <strong>
          <a
            href="https://www.linkedin.com/in/nicolas-david-espejo-bernal"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn.
          </a>
        </strong>
      </p>
    </div>
  </div>
);

export default Certifications;