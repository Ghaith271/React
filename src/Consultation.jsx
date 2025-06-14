function Consultation() {
  return (
    <div className="consultation">
      <div className="consultation-header">
        <h2 className="article-title">Consultation Form</h2>
        <h1 className="article-heading">
          Schedule a <span className="highlightt">Consultation Form</span>
        </h1>
        <div className="consultation-content">
          <h1 className="title">
            Ready to Transform Your <br /> Business?
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
            Sed do eiusmod <br /> tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <h1 className="completed-projects">
            500+ <br />
            <span className="ss">Projects Completed</span>
          </h1>
          <h1 className="completed-projects">
            98% <br />
            <span className="ss">Client Satisfaction</span>
          </h1>
          <h1 className="completed-projects">
            15+ <br />
            <span className="ss">Years Experience</span>
          </h1>
          <div className="form-container">
            <h2>Schedule a Free Consultation</h2>
            <p>
              Fill out the form below and our team will contact you within 24
              hours.
            </p>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" required />

              <select required defaultValue="Business Transformation">
                <option value="">Select Service</option>
                <option>Strategic Planning</option>
                <option>Business Transformation</option>
                <option>Financial Advisory</option>
                <option>Human Resources</option>
                <option>Technology Consulting</option>
              </select>

              <button type="submit">Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
