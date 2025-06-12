import fototow from './assets/fototow.webp';


function Header() {
  return (
    <header>
      <div className="header">
      <img className='fototow' src={fototow} alt="Header Image" />
      <h3 className='header-title'>15+ <br /><span className='header-subtitle'>Years of Experience</span></h3>
      </div>
        <div className="header-text">
            <h1 className='header-title2'>We Help Businesses Reach <br /> Their Full Potential</h1>
            <p className='header-description2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus <br /> leo.</p>
            <p className='header-description3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt <br /> explicabo.</p>
        </div>
        <div className="header-icons1">

            <a href="" className='iconStyle'>
              <i className="fa-solid fa-chart-simple"></i>
            </a>
            <h3>Business Growth</h3>
            <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut fugit.</p>
        </div>
        <div className="header-icons2">

            <a href="" className='iconStyle'>
              <i class="fa-regular fa-lightbulb"></i>
            </a>
            <h3>Innovative Solutions</h3>
            <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut fugit.</p>
        </div>
        <div className="header-icons3">

            <a href="" className='iconStyle'>
              <i class="fa-solid fa-user-group"></i>
            </a>
            <h3>Expert Team</h3>
            <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut fugit.</p>
        </div>
        <div className="header-icons4">

            <a href="" className='iconStyle'>
              <i class="fa-solid fa-trophy"></i>
            </a>
            <h3>Proven Results</h3>
            <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut fugit.</p>
        </div>
        <button className='cccc'><a href="#" className='learn-More'>learn More About Us</a></button>
    </header>
  );
}

export default Header;