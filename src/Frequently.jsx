const faqs = [
  {
    question: "Vivamus suscipit tortor eget felis porttitor volutpat?",
    answer:
      "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.",
  },
  {
    question: "Curabitur aliquet quam id dui posuere blandit?",
    answer:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
  },
  {
    question: "Sed porttitor lectus nibh ullamcorper sit amet?",
    answer:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum.",
  },
  {
    question: "Nulla quis lorem ut libero malesuada feugiat?",
    answer:
      "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.",
  },
  {
    question: "Vestibulum ac diam sit amet quam vehicula elementum?",
    answer:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
  },
];

const FAQ = () => {
  return (
    <>
    <h2 className="article-title">Frequently Asked Questions</h2>
        <h1 className="article-heading">
         Frequently Asked Questions <span className="highlightt">Questions</span>
        </h1>
    <div className="faq-wrapper">
      <div className="faq-container">
        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>

      <div className="faq-box">
        <div className="icon">💬</div>
        <h3>Can't find answer to your question?</h3>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula.
        </p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
    </>
  );
};

export default FAQ;
