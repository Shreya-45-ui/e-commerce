import { useState } from "react";
import '../style/help.css'
 function HelpFAQ() {
  const faqs = [
    {
      q: "How do I place an order?",
      a: "Browse products, select your size, add to cart, and proceed to checkout. You’ll receive an order confirmation after payment."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI, Credit/Debit Cards, Net Banking, and popular wallets."
    },
    {
      q: "How can I track my order?",
      a: "Go to My Orders and click on the order you want to track. Tracking details will be shown once shipped."
    },
    {
      q: "What is your return policy?",
      a: "You can return most items within 7 days of delivery. Products must be unused with original tags."
    },
    {
      q: "How do I contact customer support?",
      a: "You can reach us via the Contact Us page or email support@yourstore.com."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <p className="subtitle">We’re here to help you ✨</p>

      <section className="help-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </section>

      <section className="help-section">
        <h2>Need More Help?</h2>
        <p>
          If you still have questions, feel free to contact our support team.
        </p>
        <ul className="contact-list">
          <li>Email: <strong>support@yourstore.com</strong></li>
          <li>Phone: <strong>+91 90000 00000</strong></li>
          <li>Working Hours: <strong>Mon–Sat, 10AM – 6PM</strong></li>
        </ul>
      </section>
    </div>
  );
}
export default HelpFAQ