import { FaMinus, FaPlus } from "react-icons/fa";
import "../styles/FAQsCard.css";
import { useState } from "react";

const FAQsCard = ({ questions, answers }) => {
  const [accordion, setAccordion] = useState(false);

  const toggleAccordion = () => setAccordion(!accordion);

  return (
    <>
      <div className="faqs-container">
        <div className="faqs-question" onClick={toggleAccordion}>
          <h4>{questions}</h4>
          <div className="icons">{accordion ? <FaMinus /> : <FaPlus />}</div>
        </div>
        {accordion && <div className="faqs-answer">{answers}</div>}
      </div>
    </>
  );
};

export default FAQsCard;
