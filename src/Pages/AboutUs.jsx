import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="aboutus-header">
        <h1 className="section-header">
          About <span className="purple-header">Saastool</span>
        </h1>
        <p className="center-text">
          Empowering businesses with smart SaaS solutions for a productive
          future.
        </p>
      </div>
      <div className="aboutus-content">
        <p>
          Saastool was founded with a vision to revolutionize the way businesses
          operate by providing innovative, scalable, and user-friendly SaaS
          tools. Our mission is to help organizations of all sizes streamline
          their workflows, enhance productivity, and make data-driven decisions
          with ease.
        </p>
        <p>
          Our team is passionate about technology and dedicated to delivering
          exceptional value to our customers. We believe in continuous
          improvement, customer-centric design, and building solutions that
          truly make a difference.
        </p>
        <p>
          Join us on our journey to shape the future of work with smart,
          reliable, and efficient SaaS products.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
