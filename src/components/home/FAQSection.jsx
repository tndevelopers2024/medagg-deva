import '../../assets/css/home/FAQSection.css';

import React, { useState } from 'react';


const faqData = [
  {
    question: "Will the Medagg Healthcare assist for ambulance service?",
    answer:
      "We can. But we are not an emergency service provider but essentially an elective treatment platform.",
  },
  {
    question:
      'Is it possible to download the "Medagg Healthcare" app from any other store?',
    answer:
      "Currently, it’s available only on official platforms like Play Store or App Store.",
  },
  {
    question: "Do you offer weekend and evening Appointments?",
    answer:
      "Yes, depending on the doctor's availability, we support flexible scheduling.",
  },
  {
    question: "How Medagg helps hospitals?",
    answer:
      "Medagg connects patients with specialists and enhances hospital outreach and patient satisfaction.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userQuestion, setUserQuestion] = useState('');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Content */}
        <div className="faq-left">
          <h2>
            <b>Frequently Asked</b>
            <br />
            Questions
          </h2>
          <p>
            Got Questions? Find Quick Answers About Our Treatments And Patient
            Support.
          </p>

          <h4><b>Can’t Locate The Answer You Need?</b></h4>
          <p>We Are Here To Help You With Any Question You Have.</p>

          <label htmlFor="question">Ask Your Question</label>
          <input
            type="text"
            id="question"
            placeholder="Type Here"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <button onClick={() => alert('Question submitted!')}>Send</button>
        </div>

        {/* Right Content */}
        <div className="faq-right">
          <div className="accordion">
            {faqData.map((item, index) => (
              <div
                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                key={index}
              >
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  {item.question}
                  <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className="accordion-body">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { faqData }; 