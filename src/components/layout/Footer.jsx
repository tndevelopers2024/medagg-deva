import '../../assets/css/home/Footer.css';
import Hlogo from '../../../public/logo/Hlogo.png';

const Footer = () => {
  return (
        <footer className="footer">
    <div className="footer-container">
  
      <div className="footer-left">
        <img src={Hlogo} alt="Medagg Logo" className="logo" />
        <p>
          Medagg Healthcare, established in 2021, is a pioneering force in promoting advanced non-surgical treatments across India.
          With a mission to bridge the gap in healthcare knowledge, we began as a discovery platform focused on connecting patients to hospitals.
          Today, we specialize in Interventional Radiology and advocate for non-surgical procedures as the future of healthcare.
        </p>
        <button className="know-more">Know More</button>
        <div className="policy-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms and Condition</a>
        </div>
      </div>

  
      <div className="footer-links">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Knee Pain</a></li>
            <li><a href="#">Enlarged Prostate</a></li>
            <li><a href="#">Thyroid Nodule</a></li>
            <li><a href="#">Varicocele</a></li>
          </ul>
        </div>

        <div className="footer-services-2">
          <ul>
            <li><a href="#">Fallopian Tube Block</a></li>
            <li><a href="#">Uterine Fibroids</a></li>
            <li><a href="#">Varicose Veins</a></li>
            <li><a href="#">Interventional</a></li>
          </ul>
        </div>
      </div>
    </div>


    <div className="footer-bottom">
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
      </div>
      <p>© 2025 Medagghealthcare. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
