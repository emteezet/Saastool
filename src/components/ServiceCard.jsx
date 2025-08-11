import { Link } from "react-router-dom";



const ServiceCard = ({ icon, header, description, learnMoreLink }) => {

    const serviceStyle = {
        backgroundColor: "var(--Card-Background)",
        width: "100%",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #eee",
        textAlign: "center",
        borderRadius: "8px",
        gap: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        color: "var(--Text-Color)",
    };

    return ( 
      <>
          <div className="services-card" style={serviceStyle}>


                <div className="icons" style={{backgroundColor:'var(--primary-color)', color:'var(--Light-Background)', 
                    padding: "12px", borderRadius: "8px", fontWeight:'bold',}}>{icon}</div>
                <h3>{header}</h3>
                <p>{description}</p>
                <Link to={learnMoreLink}>Learn More</Link>
    

          </div>
            

        </>


     );
}
 
export default ServiceCard;