import man from './man.webp';
import man1 from './man1.webp';
import man2 from './man2.webp';


function TeamCarousel() {
  return (
    <div className="cardssss">
        <div className="team-container">
            
      <h2>
        Check Our <span>Expert Team</span>
      </h2>

      <div className="carousel-wrapper">
       
        <div className="arrow left">
          <i className="fas fa-chevron-left"></i>
        </div>

       
        <div className="team-cards">
          <div className="card">
            <div className="image-box">
              <img src={man} alt="Jason Parker" />
              <div className="hover-icons">
                <i className="fas fa-times"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <h3>Jason Parker</h3>
            <p className="job">UI/UX Designer</p>
            <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={man1} alt="Marcus Wilson" />
              <div className="hover-icons">
                <i className="fas fa-times"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <h3>Marcus Wilson</h3>
            <p className="job">Chief Technology Officer</p>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={man2} alt="Sophia Reynolds" />
              <div className="hover-icons">
                <i className="fas fa-times"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <h3>Sophia Reynolds</h3>
            <p className="job">Product Designer</p>
            <p className="desc">Duis aute irure dolor in reprehenderit in voluptate...</p>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={man} alt="Daniel Chen" />
              <div className="hover-icons">
                <i className="fas fa-times"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <h3>Daniel Chen</h3>
            <p className="job">Marketing Specialist</p>
            <p className="desc">Excepteur sint occaecat cupidatat non proident...</p>
          </div>
        </div>

        
        <div className="arrow right">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>

      
      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
    </div>
  );
}

export default TeamCarousel;
