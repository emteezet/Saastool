import ServiceCard from "./ServiceCard";
import { FaBook, FaChartBar, FaUsers } from "react-icons/fa";
import '../styles/Services.css';

const Services = () => {
    const servicesData = [
        {
        icon: <FaBook />,
        header: "Product Launch",
        description: "Our team ensures a smooth product launch, driving immediate engagement.",
        learnMoreLink: "#"
        },

        {
        icon: <FaChartBar />,
        header: "Market Research",
        description: "In-depth market analysis to identify opportunities and threats.",
        learnMoreLink: "#"
        },

        {
        icon: <FaUsers />,
        header: "Customer Support",
        description: "24/7 customer support to assist with any inquiries or issues.",
        learnMoreLink: "#"
        }   
    ];


    return (

          <section class="services">
            <p class="center-text">Basic Pack</p>
            <h1>Services included has <span class="purple-header">every plan</span></h1>

            <div class="services-container">
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        header={service.header}
                        description={service.description}
                        learnMoreLink={service.learnMoreLink}
                    />
                ))}
            </div>
        </section>



      );
}
 
export default Services;