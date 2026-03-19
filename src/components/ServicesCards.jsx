import "./ServicesCards.css";
import { FaLaptopCode, FaShareAlt, FaSearch, FaBullhorn } from "react-icons/fa";

function ServicesCards() {
  const services = [
    { icon: <FaLaptopCode />, title: "Web Development" },
    { icon: <FaShareAlt />, title: "Social Media" },
    { icon: <FaSearch />, title: "SEO" },
    { icon: <FaBullhorn />, title: "Google Ads" },
  ];

  return (
    <div className="services-section">
      <div className="container">
        <div className="row justify-content-center">

          {services.map((service, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="service-card text-center">
                <div className="icon">{service.icon}</div>
                <h6>{service.title}</h6>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ServicesCards;