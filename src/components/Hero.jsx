import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "../styles/Hero.css";
import saastool from "../assets/saastool.svg";

const Hero = () => {
  return (
    <>
      <section class="hero-section">
        <div className="hero-details">
          <div className="hero-img">
            <img src={saastool} alt="saastool image" />
          </div>

          <div className="hero-header">
            <div class="hero-text">
              <h1 class="section-header">
                Boost Your <span class="purple-header">Productivity</span> With
                Our Smart SaaS Tools
              </h1>
              <p>
                Ready to experience the future of work? Signup up for a free
                trial and see how our Saas solution can transform your business.
                No commitment, just results.{" "}
              </p>
            </div>

            <div class="hero-btns">
              <button>
                <NavLink to="./auth">Get started</NavLink>
              </button>
              <button class="btns-border">
                <ScrollLink
                  to="subscription-container"
                  smooth={true}
                  duration={200}
                  spy={true}
                >
                  Get Demo
                </ScrollLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
