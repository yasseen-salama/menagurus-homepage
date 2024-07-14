import React from 'react';
import { Link } from 'gatsby';
import heshamImage from '../img/circular-profile.png'; 
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const MeetPartner = () => (
    <div className="column is-12" style={{ backgroundColor: "#f0f0f0", borderRadius: "8px", padding: "20px" }}>
      <h3 className="has-text-weight-semibold is-size-2">Meet our Senior Partner: Dr. Hesham Abdelghaffar</h3>
      <div className="columns">
        <div className="column is-8">
          <p> 
          Hesham is a seasoned business leader and serial entrepreneur with over 25 years of market experience in the Middle East and North Africa. Hesham has an impressive track record of starting, building, scaling, and exiting new companies. He is knowledgeable in managing businesses across the MENA region, maintaining functional experience in strategic planning, management of growth, change and risk management, financial analysis, entrepreneurship, scaling-up startups, sales and operation management, CRM, supply chain management, cross-functional team leadership, and outsourcing.
          Dr. Abdelghaffar has an extensive experience as a University Professor: he currently serves as the Head of the Health Administration and Informatic Technology Department at the College of Applied Health Science Technology in Misr University for Science and Technology (MUST). Additionally, the holds the position of Adjunct Professor of Management at the American University in Cairo (AUC) where he teaches wide range of courses, including Information driven healthcare, Health informatics, Healthcare Leadership and governance, organization behavior and culture, strategic planning, Creative entrepreneurship and change management across AUC School of Business, School of Science and Engineering and School of Continuing Education.
        Prior to this, Hesham was the Executive Vice President and Regional Managing Director for the Middle East and Africa at the Wadhwani Foundation, where he led efforts to support entrepreneurship and job creation across 22 countries. Hesham's rich experience and deep industry knowledge make him an invaluable asset to our team and the startups we support.
          </p>
        </div>
        <div className="column is-4 has-text-centered">
          <img src={heshamImage} alt="Hesham Abdelghaffar" style={{width: "200px" }} />
          <div style={{ marginTop: "5px" }}>
            <a href="https://www.linkedin.com/in/heshamabdelghaffar/" style={{ margin: "0 10px", fontSize: "2em", color: "grey" }}><FaLinkedin /></a>
             <a href="mailto:ha@menagurus.com" style={{ margin: "0 10px", fontSize: "2em", color: "grey" }}><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default MeetPartner;