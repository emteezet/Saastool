import "../styles/FAQsCard.css";

const FAQsCard = ({ questions, answers }) => {
  return (
    <>
      <details>
        <summary>{questions}</summary>
        <p>{answers}</p>
      </details>
    </>
  );
};

export default FAQsCard;
