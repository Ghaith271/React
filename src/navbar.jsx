

function Navbar() {
  return (
    <nav>
     <div className="navbar">
       <div className="logo"><h1><a className="logo" href="#home">Consulting.</a></h1></div>
       <div className="links">
         <a href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#services">Services</a>
         <a href="#team">Team</a>
         <a href="#why-choose-us">Why Choose Us</a>
         <a href="#pricing">Pricing</a>
         <a href="#contact">Contact</a>
       </div>
       <button className="get-started">Get Started</button>
     </div>
    </nav>
  );
}
export default Navbar;
// This code defines a simple Navbar component that renders a navigation bar with three links: Home, About, and Contact.