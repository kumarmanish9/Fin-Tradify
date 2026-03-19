import { useEffect, useState } from "react";
import heroImg from "../assets/girl.png";
import "./Hero.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLaptopCode, FaShareAlt, FaSearch, FaBullhorn } from "react-icons/fa";

function Hero() {
  const fullText = "DIGITAL SOLUTIONS & IT SERVICES FOR SUCCESS";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // 🔥 Paragraph typing (word by word)
  const paragraph =
    "Grow your business with powerful digital marketing — from SEO to social media, and targeted campaigns designed to boost visibility and drive results.";

  const words = paragraph.split(" ");
  const [paraText, setParaText] = useState("");
  const [paraIndex, setParaIndex] = useState(0);

  // Heading typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Paragraph typing effect
  useEffect(() => {
    if (paraIndex < words.length) {
      const timeout = setTimeout(() => {
        setParaText((prev) => prev + words[paraIndex] + " ");
        setParaIndex(paraIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [paraIndex]);

  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <p className="small-text">
              INNOVATIVE SOLUTIONS FOR BUSINESS GROWTH
            </p>

            <h1 className="main-heading">
              {text}
              <span className="cursor">|</span>
            </h1>

            <ul className="hero-list">
              <li>Result-Driven Digital Marketing Solutions</li>
              <li>SEO, Social Media & PPC Campaigns</li>
              <li>Content Marketing & Email Automation</li>
              <li>Branding & Online Reputation Management</li>
            </ul>

            {/* Social Icons */}
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
            </div>

            {/* Service Cards */}
            <div className="hero-cards">
              <div className="card-box">
                <FaLaptopCode />
                <p>Web Development</p>
              </div>

              <div className="card-box">
                <FaShareAlt />
                <p>Social Media</p>
              </div>

              <div className="card-box">
                <FaSearch />
                <p>SEO</p>
              </div>

              <div className="card-box">
                <FaBullhorn />
                <p>Google Ads</p>
              </div>
            </div>

            {/* 🔥 Paragraph BELOW cards */}
            <p className="hero-para">
              {paraText}
              <span className="cursor">|</span>
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">
            <div className="hero-image-box">
              <img
                src={heroImg}
                alt="hero"
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;