import React from 'react';
import { Link } from 'gatsby';
import heshamImage from '../img/circular-profile.png'; 
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const MeetPartner = () => (
    <div className="column is-12" style={{ backgroundColor: "#f0f0f0", borderRadius: "8px", padding: "20px" }}>
      <h3 className="has-text-weight-semibold is-size-2">Meet our Senior Partner: Hesham Abdelghaffar</h3>
      <div className="columns">
        <div className="column is-8">
          <p> 
          Hesham is a seasoned business leader and serial entrepreneur with over 25 years of market experience in the Middle East and Africa. Hesham has an impressive track record of starting, building, scaling, and exiting new companies and subsidiaries. He is knowledgeable in managing businesses across the MEA region, maintaining functional experience in strategic planning, management of growth, change and risk management, financial analysis, entrepreneurship, scaling-up startups, sales and operation management, CRM, supply chain management, cross-functional team leadership, and outsourcing.
          alizing. He is currenlty an Adjunct Professor of Management at the American University in Cairo (AUC). Prior to this, Hesham was the Executive Vice President and Regional Managing Director for the Middle East and Africa at the Wadhwani Foundation, where he led efforts to support entrepreneurship and job creation across 22 countries. Hesham's rich experience and deep industry knowledge make him an invaluable asset to our team and the startups we support.
          </p>
        </div>
        <div className="column is-4 has-text-centered">
          <img src={heshamImage} alt="Hesham Abdelghaffar" style={{ borderRadius: "50%", width: "150px" }} />
          <div style={{ marginTop: "10px" }}>
            <a href="https://www.linkedin.com/in/heshamabdelghaffar/" style={{ margin: "0 10px", fontSize: "2em", color: "grey" }}><FaLinkedin /></a>
             <a href="mailto:ha@menagurus.com" style={{ margin: "0 10px", fontSize: "2em", color: "grey" }}><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default MeetPartner;