const ContactUs = () => {
  return (
    <>
      <h2 className="article-title">Contact</h2>
        <h1 className="article-heading">
         Contact  <span className="highlightt">Us</span>
        </h1>
    <div className="contact-wrapper">
      

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Feel free to reach out with any questions about the book, speaking
            engagements, or media inquiries.
          </p>

          <div className="contact-detail">
            <span>📧</span>
            <div>
              <strong>Email:</strong>
              <p>author@example.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📞</span>
            <div>
              <strong>Phone:</strong>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📍</span>
            <div>
              <strong>Address:</strong>
              <p>123 Book Street, Literary Lane<br />Wordsmith City, NY 10001</p>
            </div>
          </div>

        
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="I loved your book!" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your message here…" rows="5"></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;