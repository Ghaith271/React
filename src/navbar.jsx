import foto from "./assets/foto.webp";

function Navbar() {
  return (
  <>
    <nav>
      <div className="navbar">
        <div className="logo">
          <h1>
            <a className="logo" href="#home">
              Consulting.
            </a>
          </h1>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#why-choose-us">Why Choose Us</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="get-started">
          <a href="#" className="get-started">
            Get Started
          </a>
        </button>
      </div>
      
    </nav>
  <div className="next-to-navbar">
        <div>
          <h1 className="title">
            Strategic Solutions <br /> for Business Growth
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
            Sed do eiusmod <br /> tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <button className="get-free">
            <a className="one" href="#">
              Get a Free Consultation
            </a>
          </button>
          <button className="our-services">
            <a className="tow" href="#">
              Our Services
            </a>
          </button>
          <h3 className="title2">
            15+ <br /> Years Experience
          </h3>
          <h3 className="title3">
            500+ <br /> Clients Worldwide
          </h3>
          <h3 className="title4">
            98% <br /> Success Rate
          </h3>
        </div>
        <div className="image-container">
          <img width={700} src={foto} alt="Consulting" />
        </div>
      </div>
      </>
  );
}
export default Navbar;
