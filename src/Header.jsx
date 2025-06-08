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
        <div className="header-icons">

            <i className='iconStyle' class="fa-solid fa-chart-simple iconStyle"></i>
        </div>
    </header>
  );
}

export default Header;