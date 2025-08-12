import FAQsCard from "../components/FAQsCard";

const FAQs = () => {
  const faqsData = [
    {
      question: "What is SaasTool?",
      answer:
        "SaasTool is a comprehensive software solution designed to streamline business operations, enhance productivity, and provide valuable insights through data analytics.",
    },
    {
      question: "How does SaasTool improve productivity?",
      answer:
        "SaasTool improves productivity by automating repetitive tasks, providing real-time data access, and facilitating better collaboration among team members.",
    },
    {
      question: "Is SaasTool suitable for small businesses?",
      answer:
        "Yes, SaasTool is designed to be scalable and can be tailored to meet the needs of small businesses as well as larger enterprises.",
    },
    {
      question: "What kind of support does SaasTool offer?",
      answer:
        "SaasTool offers 24/7 customer support through various channels including email, chat, and phone to assist users with any issues they may encounter.",
    },
  ];

  const faqStyle = {
    backgroundColor: "var(--primary-color)",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  };

  return (
    <section className="FAQs-section" style={faqStyle}>
      <div
        className="Faqs-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <p class="center-text">Frequently Answer Questions</p>
        <h1 class="section-header" style={{ textAlign: "center" }}>
          Common Queries <span class="purple-header">Solved,</span>
          Quick <br /> Answer For You
        </h1>
      </div>

      <div className="Faqs-container">
        {faqsData.map((faq, index) => (
          <FAQsCard key={index} questions={faq.question} answers={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
