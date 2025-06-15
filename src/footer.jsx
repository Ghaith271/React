const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-box">
          <i className="icon">📍</i>
          <div>
            <h4>Address</h4>
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
          </div>
        </div>

        <div className="footer-box">
          <i className="icon">📞</i>
          <div>
            <h4>Contact</h4>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
            </p>
          </div>
        </div>

        <div className="footer-box">
          <i className="icon">⏰</i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon–Sat:</strong> 11AM - 23PM
              <br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>

        <div className="footer-box">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <p>
          © Copyright <strong>Consulting</strong>. All Rights Reserved
        </p>
        <p className="credits">
          Designed by{" "}
          <a
            href="https://bootstrapmade.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            BootstrapMade
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
