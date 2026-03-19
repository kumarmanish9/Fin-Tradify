import aboutImg from "../assets/about.png"; // add image here
import "./About.css";
import { FaSearch, FaBullhorn, FaFacebookF, FaEnvelope, FaEdit } from "react-icons/fa";

function About() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-center">
 
          {/* LEFT SIDE */}
          <div className="col-md-6">
            <p className="about-small">WHAT WE DO</p>

            <h2 className="about-heading">
              <span>Powerful Digital Marketing</span> for <br />
              Business Growth
            </h2>

            <p className="about-text">
              We provide complete <b>digital marketing solutions</b> to help brands grow online.
              From SEO to social media, ads to content — our strategies are designed to boost visibility,
              generate leads, and maximize ROI.
            </p>

            {/* FEATURES */}
            <div className="about-features">
              <p><FaSearch /> Search Engine Optimization (SEO)</p>
              <p><FaBullhorn /> Pay Per Click (Google Ads / Meta Ads)</p>
              <p><FaFacebookF /> Social Media Marketing</p>
              <p><FaEnvelope /> Email & WhatsApp Marketing</p>
              <p><FaEdit /> Content & Influencer Marketing</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">
            <div className="about-image-box">
              <img src={aboutImg} alt="about" />

              {/* Floating badge */}
              <div className="about-badge">
                <h4>10+</h4>
                <p>Years</p>
                <small>Of IT Excellence</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;