import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "How do you use state in React?",
    answer: "You use the useState hook to manage state in functional components."
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in a React app."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container" >
      <h2 >Frequently Asked Questions</h2>
      {FAQ_DATA.map((faq, index) => (
        <div key={index} >
          <div
            onClick={() => toggleFAQ(index)}
         
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div >{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};


export default FaqSection;
