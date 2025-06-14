import fotoss from "./assets/fotoss.webp";

function Choose() {
  return (
    <>
      <div className="head">
        <h2 className="article-title">Why Choose Us</h2>
        <h1 className="article-heading">
          Why Choose <span className="highlightt">Our Services</span>
        </h1>
      </div>
      <div className="Next2">
        <h1 className="Next-title2">
          Why Choose Our Consulting <br /> Services
        </h1>
        <p className="Next-descripion2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="Next-descripion3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <i className="fa-solid fa-medal medal"></i>
        <h2 className="icon-title">Industry Expertise</h2>
        <p className="icon-discripion">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut{" "}
          <br /> fugit, sed quia consequuntur magni dolores.
        </p>
        <i className="fa-solid fa-medal medal"></i>
        <h2 className="icon-title">Industry Expertise</h2>
        <p className="icon-discripion">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut{" "}
          <br /> fugit, sed quia consequuntur magni dolores.
        </p>
        <i className="fa-solid fa-medal medal"></i>
        <h2 className="icon-title">Industry Expertise</h2>
        <p className="icon-discripion">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut{" "}
          <br /> fugit, sed quia consequuntur magni dolores.
        </p>
        <i className="fa-solid fa-medal medal"></i>
        <h2 className="icon-title">Industry Expertise</h2>
        <p className="icon-discripion">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut{" "}
          <br /> fugit, sed quia consequuntur magni dolores.
        </p>
      </div>

      <div>
        <img className="fotoss" src={fotoss} alt="" />
        <div className="title-in">
          <h4 className="tc1">
            95% <br />
            Client <br /> <span className="w">Satisfaction</span>
          </h4>
          <h4 className="tc2">
            95% <br />
            Client <br /> <span className="w">Satisfaction</span>
          </h4>
          <h4 className="tc3">
            95% <br />
            Client <br /> <span className="w">Satisfaction</span>
          </h4>
          <h4 className="tc4">
            95% <br />
            Client <br /> <span className="w">Satisfaction</span>
          </h4>
        </div>
        <h3 className="textttt">
          15+ <br /> Years of Excellence
        </h3>
      </div>

      
    </>
  );
}

export default Choose;
