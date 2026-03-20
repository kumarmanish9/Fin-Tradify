import aboutImg from "../assets/about.png";
import "./About.css";
import { FaSearch, FaChartLine, FaShieldAlt, FaRocket, FaUsers, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          {/* Content */}
          <div className="about-content">
            <header className="about-header">
              <span className="about-badge-small" role="img" aria-label="Trusted Excellence">⭐</span>
              <p className="about-subtitle">WHO WE ARE</p>
              <h1 id="about-title" className="about-title">
                FinTradify: Revolutionizing <span className="accent">Financial Trading</span>
              </h1>
            </header>

            <p className="about-description">
              FinTradify is your premier fintech platform for intelligent trading solutions. 
              We combine cutting-edge AI algorithms, real-time market analytics, and enterprise-grade security 
              to empower traders with tools that deliver consistent results in volatile markets.
            </p>

            <div className="about-features-grid">
              <div className="feature-card">
                <FaSearch className="feature-icon" />
                <h3>AI-Powered Analytics</h3>
                <p>Advanced market predictions with 95% accuracy using machine learning.</p>
              </div>
              <div className="feature-card">
                <FaChartLine className="feature-icon" />
                <h3>Real-Time Trading</h3>
                <p>Execute trades instantly across 50+ global exchanges with zero latency.</p>
              </div>
              <div className="feature-card">
                <FaShieldAlt className="feature-icon" />
                <h3>Bank-Grade Security</h3>
                <p>2FA, cold storage, and $100M insurance protect your assets 24/7.</p>
              </div>
              <div className="feature-card">
                <FaRocket className="feature-icon" />
                <h3>Smart Automation</h3>
                <p>Copy successful traders or deploy custom algo-strategies effortlessly.</p>
              </div>
              <div className="feature-card">
                <FaUsers className="feature-icon" />
                <h3>Elite Community</h3>
                <p>Join 500K+ active traders sharing signals and strategies daily.</p>
              </div>
              <div className="feature-card">
                <FaGlobe className="feature-icon" />
                <h3>Global Access</h3>
                <p>Trade crypto, forex, stocks from any device, anywhere in the world.</p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Active Traders</span>
              </div>
              <div className="stat">
                <span className="stat-number">$2.5B+</span>
                <span className="stat-label">Monthly Volume</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.99%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img src={aboutImg} alt="FinTradify trading platform dashboard" className="about-image" loading="lazy" />
              <div className="experience-badge">
                <div className="badge-circle">10+</div>
                <div className="badge-text">
                  <strong>Years</strong>
                  <span>Fintech Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

