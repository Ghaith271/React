function Section() {
  return (
    <section className="section">
      <div className="section-content">
        <h2 className="section-title">Our Consulting Process</h2>
        <h1 className="section-heading">
          Check Our <span className="highlight">Our Consulting Process</span>
        </h1>
      </div>
      <div className="section-titleh">
        <h1 className="section-title2">Our Proven Consulting Process</h1>
        <p className="section-description2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="section-description3">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium <br /> doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore <br /> veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
        <button className="start-yourb">
          <a className="start-your" href="#">
            Start Your Project
          </a>
        </button>
        <button className="learn-more">
          <a href="#">Learn More</a>
        </button>
      </div>
      <section className="steps-container">
        <div className="step-box">
          <div className="step-left">
            <div className="step-number">01</div>
          </div>
          <div className="step-right">
            <h3 className="step-title">Discovery & Analysis</h3>
            <p className="step-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="step-box">
          <div className="step-left">
            <div className="step-number">02</div>
          </div>
          <div className="step-right">
            <h3 className="step-title">Strategy Development</h3>
            <p className="step-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="step-box">
          <div className="step-left">
            <div className="step-number">03</div>
          </div>
          <div className="step-right">
            <h3 className="step-title">Implementation</h3>
            <p className="step-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="step-box">
          <div className="step-left">
            <div className="step-number">04</div>
          </div>
          <div className="step-right">
            <h3 className="step-title">Monitoring & Optimization</h3>
            <p className="step-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="step-box">
          <div className="step-left">
            <div className="step-number">05</div>
          </div>
          <div className="step-right">
            <h3 className="step-title">Evaluation & Reporting</h3>
            <p className="step-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Section;
