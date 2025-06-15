function Pricing () {
return(
    <>
<div>
     <h2 className="article-title">Our Pricing Plans</h2>
        <h1 className="article-heading">
          Check Our <span className="highlightt">Pricing Plans</span>
        </h1>

</div>
<div className="pricing-page">
      <div className="toggle-wrapper">
        <span>Monthly</span>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="switch"></label>
        <span>
          Yearly <span className="save-tag">Save 20%</span>
        </span>
      </div>

      <div className="cards">
       
        <div className="card">
          <h3>Basic Plan</h3>
          <div className="price">
            <span className="monthly">$1,499</span>
            <span className="yearly">$1,199</span>
            
          </div>
          <p className="desc">Perfect for small businesses</p>
          <ul>
            <li className="check">Business Analysis</li>
            <li className="check">Strategic Planning</li>
            <li className="check">10 Consulting Hours</li>
            <li className="check">Monthly Report</li>
            <li className="cross">Market Research</li>
            <li className="cross">Implementation Support</li>
            <li className="cross">Dedicated Consultant</li>
          </ul>
          <button>Get Started</button>
        </div>

       
        <div className="card popular">
          <div className="ribbon">Popular</div>
          <h3>Professional Plan</h3>
          <div className="price">
            <span className="monthly">$2,999</span>
            <span className="yearly">$2,399</span>
            
          </div>
          <p className="desc">Ideal for growing companies</p>
          <ul>
            <li className="check">Business Analysis</li>
            <li className="check">Strategic Planning</li>
            <li className="check">25 Consulting Hours</li>
            <li className="check">Weekly Reports</li>
            <li className="check">Market Research</li>
            <li className="check">Implementation Support</li>
            <li className="cross">Dedicated Consultant</li>
          </ul>
          <button>Get Started</button>
        </div>

        
        <div className="card">
          <h3>Enterprise Plan</h3>
          <div className="price">
            <span className="monthly">$4,999</span>
            <span className="yearly">$3,999</span>
           
          </div>
          <p className="desc">For established enterprises</p>
          <ul>
            <li className="check">Business Analysis</li>
            <li className="check">Strategic Planning</li>
            <li className="check">50 Consulting Hours</li>
            <li className="check">Weekly Reports</li>
            <li className="check">Market Research</li>
            <li className="check">Implementation Support</li>
            <li className="check">Dedicated Consultant</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>

      <p className="custom-note">
        Need a custom solution? <a href="#">Contact us</a> for a personalized quote.
      </p>
    </div>
</>
);
}

export default Pricing;  